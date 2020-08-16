import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipe(this.id); //TO CHOOSE WHETHER EDIT MODE OR NEW MODE
        if (this.id >= 0) {
          this.editMode = true;
        }
        console.log(this.editMode);
        console.log(this.recipe);
        this.initForm()
      }
    );
  }

  private initForm() {
    let recipeEngredients = new FormArray([]);
    if (this.recipe['ingredients']) {
      for (let ingredient of this.recipe.ingredients) {
        recipeEngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount),
          })
        )
      }

    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe.name),
      'description': new FormControl(this.recipe.description),
      'imagePath': new FormControl(this.recipe.imagePath),
      'ingredients': recipeEngredients
    });
  }

  test() {console.log(this.recipeForm)}
  cc(m) {console.log(m)}

  onSubmit(name: string, description: string, imagePath: string, ingName: string, ingAmount: number) {
    /* let newRecipe: Recipe = {
      name: name,
      description: description,
      imagePath: imagePath,
      ingredients: [new Ingredient(ingName, ingAmount)]
    }
    this.recipesService.addRecipe(newRecipe)
    console.log(newRecipe) */
  }

}
