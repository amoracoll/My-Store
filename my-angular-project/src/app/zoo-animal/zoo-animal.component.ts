import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zoo-animal',
  imports: [],
  templateUrl: './zoo-animal.component.html',
  styleUrl: './zoo-animal.component.css'
})
export class ZooAnimalComponent {
  @Input() animal = {id: 0, name: "", fed: false}
}
