import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = true;

  getAuthToken() {
    return '01234567890';
  }

  toggleAuth() {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
