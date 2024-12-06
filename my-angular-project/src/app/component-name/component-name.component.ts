import { Component } from '@angular/core';

@Component({
  selector: 'app-component-name',  // El nombre del selector que se usará en la plantilla HTML
  templateUrl: './component-name.component.html',  // Archivo HTML para la plantilla
  styleUrls: ['./component-name.component.css']  // Archivo CSS para los estilos
})
export class ComponentNameComponent {
  // Puedes definir variables aquí
  title = 'Mi nuevo componente';
  description = 'Este es un componente de ejemplo donde puedes mostrar contenido dinámico.';
  
  // Puedes agregar métodos para manejar lógica de eventos o acciones
  displayMessage() {
    alert('¡Has hecho clic en el botón!');
  }
}
