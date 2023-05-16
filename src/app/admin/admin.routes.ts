import { Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { AuthGuard } from '../shared/auth.guard';

export const adminRoutes: Routes = [
  { path: 'admin', canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'create', pathMatch: 'full' },
    { path: 'create', component: BookCreateComponent }
  ] },
];
