import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminRoutes } from './admin/admin.routes';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component')
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes')
  },
  ...adminRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  //   RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


