import { Component, inject } from '@angular/core';
import { BookStoreService } from '../../shared/book-store.service';
import { BookComponent } from '../book/book.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, BookComponent, AsyncPipe]
})
export class DashboardComponent {
  // TS 2 // JS 1
  private bs = inject(BookStoreService);
  books$ = inject(BookStoreService).getAll();

  // TS 1 // JS 2
  constructor(
    // private bs: BookStoreService
  ) {
    // TS 3 // JS 3
    console.log('DB');
  }
}

