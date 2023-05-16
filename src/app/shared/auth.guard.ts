import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';
import { BookStoreService } from './book-store.service';

export const authGuard: CanActivateFn = () => {
  // const bs = inject(BookStoreService);

  if (inject(AuthService).isAuthenticated) {
    return true;
  } else {
    window.alert('Not logged in!');
    return inject(Router).parseUrl('/');
  }
}
