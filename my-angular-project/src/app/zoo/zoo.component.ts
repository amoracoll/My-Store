import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooAnimalComponent } from '../zoo-animal/zoo-animal.component';
import { ZooService } from '../zoo.service';

interface Animal {
  id: number;
  name: string;
  fed: boolean
}

@Component({
  selector: 'app-zoo',
  imports: [CommonModule, ZooAnimalComponent],
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
  animalList: Animal[] = [];

  constructor(private animalService: ZooService) { }

  ngOnInit(): void {
    this.animalList = this.animalService.getAnimals();
  }
}
