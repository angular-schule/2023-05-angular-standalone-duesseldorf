import { Component } from '@angular/core';
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
  books$ = this.bs.getAll();

  constructor(private bs: BookStoreService) {}
}

