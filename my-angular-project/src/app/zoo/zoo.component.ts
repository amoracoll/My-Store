import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooAnimalComponent } from '../zoo-animal/zoo-animal.component';

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

  constructor() { }

  ngOnInit(): void {
    this.animalList = [
      {
        id: 1,
        name: "Panda",
        fed: true
      },
      {
        id: 2,
        name: "Elephant",
        fed: true
      },
      {
        id: 3,
        name: "Lion",
        fed: false
      }
    ]
  }
}
