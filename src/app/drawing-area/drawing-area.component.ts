import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// On définit une interface pour typer nos objets "cercle"
// C'est une bonne pratique pour la clarté et la maintenance du code.
export interface Circle {
  cx: number;
  cy: number;
  r: number;
  color: string;
}

@Component({
  selector: 'app-drawing-area',
  standalone: true,
  imports: [CommonModule], // On importe CommonModule pour utiliser *ngFor
  templateUrl: './drawing-area.component.html',
  styleUrl: './drawing-area.component.css'
})
export class DrawingAreaComponent {
  // On utilise @ViewChild pour obtenir une référence à notre SVG dans le template
  @ViewChild('svgCanvas') svgCanvas!: ElementRef<SVGSVGElement>;

  public circles: Circle[] = [];
  private canvasWidth = 800;
  private canvasHeight = 600;

  // Méthode pour ajouter un cercle en cliquant sur la zone
  addCircleOnClick(event: MouseEvent): void {
    const svgRect = this.svgCanvas.nativeElement.getBoundingClientRect();
    const newCircle: Circle = {
      cx: event.clientX - svgRect.left,
      cy: event.clientY - svgRect.top,
      r: this.getRandomNumber(10, 50),
      color: this.getRandomColor()
    };
    this.circles.push(newCircle);
  }

  // Méthode pour ajouter un cercle aléatoire via le bouton
  addRandomCircle(): void {
    const newCircle: Circle = {
      cx: this.getRandomNumber(0, this.canvasWidth),
      cy: this.getRandomNumber(0, this.canvasHeight),
      r: this.getRandomNumber(10, 50),
      color: this.getRandomColor()
    };
    this.circles.push(newCircle);
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

