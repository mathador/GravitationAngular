import { Component } from '@angular/core';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';
import { DrawingZoneComponent } from './drawing-zone/drawing-zone.component';
import { CircleFormComponent } from './circle-form/circle-form.component'; // Import direct du composant autonome

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DrawingAreaComponent, DrawingZoneComponent, CircleFormComponent], // Import direct
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
