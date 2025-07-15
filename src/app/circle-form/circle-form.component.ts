import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circle-form',
  standalone: true,
  imports: [FormsModule], // Ajout de FormsModule pour le binding [(ngModel)]
  templateUrl: './circle-form.component.html',
  styleUrls: ['./circle-form.component.css']
})
export class CircleFormComponent {
  public circleColor: string = '#000000';
  public circleRadius: number = 20;

  @Output() addCircle = new EventEmitter<{ color: string; radius: number }>();

  onAddCircle(): void {
    this.addCircle.emit({ color: this.circleColor, radius: this.circleRadius });
  }
}