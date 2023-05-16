import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';

export const booksRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DashboardComponent },
  { path: 'search', component: BookSearchComponent },
  { path: 'details/:isbn', component: BookDetailsComponent },
];
