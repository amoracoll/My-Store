import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Country {
  name: string;
  population: number;
}

@Component({
  selector: 'app-countries',
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countryList: Country[] = [];

  constructor() {}

  ngOnInit():void {
    this.countryList = [
      {
        name: "Spain",
        population: 46754778
      },
      {
        name: "New Zeland",
        population: 4822233
      },
      {
        name: "United States of America",
        population: 331002651
      }
    ]
  }
}
