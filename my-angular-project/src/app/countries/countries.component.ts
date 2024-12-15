import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importacion servicio
import { CountryService } from '../country.service';

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

  constructor(private countryService: CountryService) {}

  ngOnInit():void {
    this.countryList = this.countryService.getCountries();
  }
}
