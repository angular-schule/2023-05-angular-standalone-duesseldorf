import { Component, inject } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgIf, RouterOutlet]
})
export class AppComponent {
  title = 'Book Rating';

  constructor(public authService: AuthService) {}
}
