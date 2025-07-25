import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import de CommonModule
import { DrawingZoneComponent } from '../drawing-zone/drawing-zone.component';
import { CircleFormComponent } from '../circle-form/circle-form.component';

export interface Circle {
  cx: number;
  cy: number;
  r: number;
  color: string;
}

@Component({
  selector: 'app-drawing-area',
  standalone: true,
  imports: [CommonModule, DrawingZoneComponent, CircleFormComponent], // Ajout de CommonModule
  templateUrl: './drawing-area.component.html',
  styleUrls: ['./drawing-area.component.css']
})
export class DrawingAreaComponent {
  @ViewChild('svgCanvas') svgCanvas!: ElementRef<SVGSVGElement>;

  public circles: Circle[] = [];
  public circleColor: string = '#000000'; // Couleur par défaut
  public circleRadius: number = 20; // Rayon par défaut
  public barycenterColor: string = '#7a7777ff'; // Couleur par défaut du barycentre

  addCircleOnClick(event: MouseEvent): void {
    const svgRect = this.svgCanvas.nativeElement.getBoundingClientRect();
    const newCircle: Circle = {
      cx: event.clientX - svgRect.left,
      cy: event.clientY - svgRect.top,
      r: this.circleRadius, // Utilise le rayon du formulaire
      color: this.circleColor // Utilise la couleur du formulaire
    };
    this.circles.push(newCircle);
  }

  addCircleFromForm(circleData: { color: string; radius: number }): void {
    const newCircle: Circle = {
      cx: Math.random() * 800,
      cy: Math.random() * 600,
      r: circleData.radius,
      color: circleData.color
    };
    this.circles.push(newCircle);
  }

  getBarycenter(): { x: number; y: number } | null {
    if (this.circles.length === 0) {
      return null; // Aucun cercle, pas de barycentre
    }

    let totalMass = 0;
    let weightedX = 0;
    let weightedY = 0;

    for (const circle of this.circles) {
      const mass = circle.r; // Utilise le rayon comme masse
      totalMass += mass;
      weightedX += circle.cx * mass;
      weightedY += circle.cy * mass;
    }

    return {
      x: weightedX / totalMass,
      y: weightedY / totalMass
    };
  }
}

