import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CircleFormComponent } from './circle-form.component';

@NgModule({
  declarations: [CircleFormComponent],
  imports: [FormsModule],
  exports: [CircleFormComponent]
})
export class CircleFormModule {}