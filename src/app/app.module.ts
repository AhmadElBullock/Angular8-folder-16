import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesService } from './recipes/recipes.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { Page404Component } from './page404/page404.component';
import { RecipeDetailStartComponent } from './recipes/recipe-detail-start/recipe-detail-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    Page404Component,
    RecipeDetailStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/recipes', pathMatch: 'full'},
      {path: 'recipes', component: RecipesComponent, children:[
        {path: '', component: RecipeDetailStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
      ]},
      {path: 'shopping-list', component: ShoppingListComponent},
      {path: '**', component: Page404Component},
      //{path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    ]),
  ],
  providers: [RecipesService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
