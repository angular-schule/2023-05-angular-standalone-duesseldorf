import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [

  { path: 'admin', canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'create', pathMatch: 'full' },
    { path: 'create', component: BookCreateComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
