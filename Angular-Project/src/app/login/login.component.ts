// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  submitted: boolean = false;

  login() {
    console.log('Login form submitted!');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.submitted = true; // Set submitted flag to true
  }
}
