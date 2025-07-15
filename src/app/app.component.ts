import { Component } from '@angular/core';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // On ajoute notre nouveau composant dans les imports
  imports: [DrawingAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // You can add component logic here if needed
}
