import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, FormsModule], // Ajout de FormsModule pour le binding
  templateUrl: './drawing-area.component.html',
  styleUrl: './drawing-area.component.css'
})
export class DrawingAreaComponent {
  // On utilise @ViewChild pour obtenir une référence à notre SVG dans le template
  @ViewChild('svgCanvas') svgCanvas!: ElementRef<SVGSVGElement>;

  public circles: Circle[] = [];
  public circleColor: string = '#000000'; // Couleur par défaut
  public circleRadius: number = 20; // Rayon par défaut
  private canvasWidth = 800;
  private canvasHeight = 600;

  // Méthode pour ajouter un cercle en cliquant sur la zone
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

  // Méthode pour ajouter un cercle basé sur les données du formulaire
  addCircleFromForm(): void {
    const newCircle: Circle = {
      cx: this.getRandomNumber(0, this.canvasWidth), // Position aléatoire en X
      cy: this.getRandomNumber(0, this.canvasHeight), // Position aléatoire en Y
      r: this.circleRadius,
      color: this.circleColor
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

