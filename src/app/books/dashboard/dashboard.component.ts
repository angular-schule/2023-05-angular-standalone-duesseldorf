import { Component } from '@angular/core';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books$ = this.bs.getAll();

  constructor(private bs: BookStoreService) {}
}

