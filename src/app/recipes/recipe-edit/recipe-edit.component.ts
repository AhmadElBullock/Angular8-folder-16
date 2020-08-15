import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode: boolean = false;

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
        console.log(this.recipe)
      }
    );
  }

  onSubmit(name: string, description: string, imagePath: string, ingName: string, ingAmount: number) {
    let newRecipe: Recipe = {
      name: name,
      description: description,
      imagePath: imagePath,
      ingredients: [new Ingredient(ingName, ingAmount)]
    }
    this.recipesService.addRecipe(newRecipe)
    console.log(newRecipe)
  }

}
