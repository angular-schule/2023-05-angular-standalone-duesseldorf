import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient, withInterceptors } from '@angular/common/http';
import { PreloadAllModules, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { adminRoutes } from './app/admin/admin.routes';
import { myApiUrl } from './token';
import { tokenInterceptor } from './app/shared/token.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([tokenInterceptor])
    ),
    provideRouter(
      [...routes, ...adminRoutes],
      withComponentInputBinding()
    ),




    { provide: myApiUrl, useValue: 'https://api.angular.schule' }
  ]
})
  .catch(err => console.error(err));

