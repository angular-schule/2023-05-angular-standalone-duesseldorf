import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component')
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes')
  },
  // ...adminRoutes
];
