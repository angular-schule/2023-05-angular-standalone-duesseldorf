import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../../shared/book';
import { CurrencyPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '../../shared/rating/rating.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  imports: [NgIf, CurrencyPipe, RouterLink, RatingComponent]
})
export class BookComponent {
  @Input() book?: Book;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }
}
