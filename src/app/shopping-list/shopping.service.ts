import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      ingredientChanged = new Subject<Ingredient[]>();
      itemSelected = new Subject<number>();

      getIngredient() {
        return this.ingredients.slice()
      }

      newIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }

      editIngredient(index: number) {
        return this.ingredients[index];
      }

      updateIngredient(name: string, amount: number, index: number) {
        const updateIngredient = new Ingredient(name, amount)
        this.ingredients.splice(index, 1, updateIngredient);
        console.log(updateIngredient)
      }
}