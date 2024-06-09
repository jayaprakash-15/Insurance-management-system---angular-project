import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <h2>Authentication</h2>
    <button (click)="signup()">Signup</button>
    <button (click)="login()">Login</button>
    <div *ngIf="message">{{ message }}</div>
  `,
})
export class AuthComponent {
  message: string = '';

  constructor(private authService: AuthService) {}

  signup(): void {
    this.authService.signup({ username: 'testuser', password: 'password' }).subscribe(response => {
      this.message = response.message;
    });
  }

  login(): void {
    this.authService.login({ username: 'testuser', password: 'password' }).subscribe(response => {
      this.message = response.message;
    });
  }
}
