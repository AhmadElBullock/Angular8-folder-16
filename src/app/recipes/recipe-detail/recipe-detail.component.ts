import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private route:ActivatedRoute ,private recipesService: RecipesService, private shoppingService: ShoppingService) {
   }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
       this.recipe = this.recipesService.getRecipe(this.id);
      }
    );
  }

  toShoppingList(newIngredients: Ingredient[]) {
    /* for (let i = 0 ;i < newIngredients.length; i++) {
      console.log(newIngredients[i]);;
      this.shoppingService.newIngredient(newIngredients[i])
    }  */
    for (let newIngredient of newIngredients) {
      this.shoppingService.newIngredient(newIngredient)
    }
  }

}
