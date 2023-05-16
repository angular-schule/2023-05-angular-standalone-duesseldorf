import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { TokenInterceptor } from './app/shared/token.interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { adminRoutes } from './app/admin/admin.routes';
import { myApiUrl } from './token';


bootstrapApplication(AppComponent, {
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
      },
      provideHttpClient(withInterceptorsFromDi()),
      provideRouter([...routes, ...adminRoutes]),
      { provide: myApiUrl, useValue: 'https://api.angular.schule' }
  ]
})
  .catch(err => console.error(err));


  // Inhalte von Modulen
  // Komponente, Direktiven, Pipes
  // Providers
  // (andere Module)
