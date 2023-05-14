import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumToArrayPipe } from './num-to-array.pipe';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    NumToArrayPipe,
    RatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RatingComponent,
    NumToArrayPipe
  ]
})
export class SharedModule { }
