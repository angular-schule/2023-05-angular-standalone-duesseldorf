import { Injectable, inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export const tokenInterceptor: HttpInterceptorFn = (request, next) => {
  const clonedRequest = request.clone({
    setHeaders: {
      Authorization: 'Bearer ' + inject(AuthService).getAuthToken()
    }
  })

  return next(clonedRequest);
};
