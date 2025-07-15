import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawing-zone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawing-zone.component.html',
  styleUrls: ['./drawing-zone.component.css']
})
export class DrawingZoneComponent {
  @ViewChild('svgCanvas') svgCanvas!: ElementRef<SVGSVGElement>;
  @Input() circles: { cx: number; cy: number; r: number; color: string }[] = [];
  @Input() circleColor: string = '#000000';
  @Input() circleRadius: number = 20;

  addCircleOnClick(event: MouseEvent): void {
    const svgRect = this.svgCanvas.nativeElement.getBoundingClientRect();
    const newCircle = {
      cx: event.clientX - svgRect.left,
      cy: event.clientY - svgRect.top,
      r: this.circleRadius,
      color: this.circleColor
    };
    this.circles.push(newCircle);
  }
}