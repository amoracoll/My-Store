import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  name: string = "lemonade";
  ingredients: string[] = ["lemon","water","sugar"]
}
