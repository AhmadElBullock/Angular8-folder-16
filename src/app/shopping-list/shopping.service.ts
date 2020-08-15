import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      ingredientChanged = new EventEmitter<Ingredient[]>();
      itemSelected = new Subject<number>();

      getIngredient() {
        return this.ingredients.slice()
      }

      newIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }

      editIngredient(index: number) {
        return this.ingredients[index];
      }
}