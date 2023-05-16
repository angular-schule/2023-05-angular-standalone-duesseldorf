import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';
import { BookComponent } from '../book/book.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgFor, BookComponent, AsyncPipe]
})
export class BookSearchComponent {
  searchControl = new FormControl('', { nonNullable: true });

  books$ = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => {
      if (term.length >= 3) {
        return this.bs.search(term);
      } else {
        return of([]);
      }
    })
  );

  constructor(private bs: BookStoreService) {}
}
