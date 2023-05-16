import { Component, computed, inject, signal } from '@angular/core';
import { BookStoreService } from '../../shared/book-store.service';
import { BookComponent } from '../book/book.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, BookComponent, AsyncPipe]
})
export class DashboardComponent {

  // name: string = 'fdhgjkhgfjdk';
  name = signal('Ferdinand');
  lastName = signal('Müller');
  fullName = computed(() => this.name() + ' ' + this.lastName());

  name$ = toObservable(this.name);


  // TS 2 // JS 1
  private bs = inject(BookStoreService);
  books$ = inject(BookStoreService).getAll();

  books = toSignal(this.books$);

  // TS 1 // JS 2
  constructor(
    // private bs: BookStoreService
  ) {
    // TS 3 // JS 3
    console.log('DB');
  }



  updateName(name: string) {
    this.name.set(name);
  }

  updateLastName(name: string) {
    this.lastName.set(name);
  }
}

