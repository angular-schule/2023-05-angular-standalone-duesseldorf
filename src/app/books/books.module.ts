import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SHARED_THINGS } from '../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SHARED_THINGS,
    ReactiveFormsModule,
  ]
})
export class BooksModule { }
