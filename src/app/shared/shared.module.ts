import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumToArrayPipe } from './num-to-array.pipe';
import { RatingComponent } from './rating/rating.component';


export const SHARED_THINGS = [
  NumToArrayPipe,
  RatingComponent
];
