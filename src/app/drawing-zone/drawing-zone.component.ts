import { Component, Input } from '@angular/core';

export interface Circle {
  cx: number;
  cy: number;
  r: number;
  color: string;
}

@Component({
  selector: 'app-drawing-zone',
  standalone: true,
  imports: [],
  templateUrl: './drawing-zone.component.html',
  styleUrls: ['./drawing-zone.component.css']
})
export class DrawingZoneComponent {
  @Input() circles: Circle[] = [];
}