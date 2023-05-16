import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NumToArrayPipe } from '../num-to-array.pipe';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [NgFor, NumToArrayPipe]
})
export class RatingComponent {
  @Input() rating = 0;
}
