import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';

@NgModule({
    imports: [
        CommonModule,
        BookComponent,
        BooksRoutingModule,
        ReactiveFormsModule,
        DashboardComponent,
        BookDetailsComponent,
        BookSearchComponent,
    ]
})
export class BooksModule { }
