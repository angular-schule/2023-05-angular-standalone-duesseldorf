import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes').then(m => m.booksRoutes)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
