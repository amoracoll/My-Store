import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { PostsComponent } from './posts/posts.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CountriesComponent } from './countries/countries.component';
import { ZooComponent } from './zoo/zoo.component';
import { ZooAnimalComponent } from './zoo-animal/zoo-animal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    BookListComponent, 
    PostsComponent, 
    RecipeComponent,
    ZooComponent,
    ZooAnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
