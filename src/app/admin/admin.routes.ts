import { Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { authGuard } from '../shared/auth.guard';
import { AuthService } from '../shared/auth.service';
import { inject } from '@angular/core';

export const adminRoutes: Routes = [
  { path: 'admin', canActivate: [authGuard], children: [
    { path: '', redirectTo: 'create', pathMatch: 'full' },
    {
      path: 'create',
      component: BookCreateComponent,
      canActivate: [
        () => inject(AuthService).isAuthenticated
      ]
    }
  ] },
];
