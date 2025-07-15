import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circle-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './circle-form.component.html',
  styleUrls: ['./circle-form.component.css']
})
export class CircleFormComponent {
  public circleColor: string = '#000000';
  public circleRadius: number = 20;

  @Output() addCircle = new EventEmitter<{ color: string; radius: number }>();
  @Output() updateColor = new EventEmitter<string>();
  @Output() updateRadius = new EventEmitter<number>();

  onAddCircle(): void {
    this.addCircle.emit({ color: this.circleColor, radius: this.circleRadius });
  }

  onColorChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.updateColor.emit(input.value); // Émet la couleur sélectionnée
  }

  onRadiusChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.updateRadius.emit(parseInt(input.value, 10)); // Émet un nombre (number)
  }
}