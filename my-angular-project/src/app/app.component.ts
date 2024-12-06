import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { PostsComponent } from './posts/posts.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CountriesComponent } from './countries/countries.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    BookListComponent, 
    PostsComponent, 
    RecipeComponent,
  CountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
