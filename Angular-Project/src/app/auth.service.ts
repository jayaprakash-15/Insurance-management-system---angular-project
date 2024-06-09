import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  signup(userData: any): Observable<any> {
    return of({ success: true, message: 'Signup successful' });
  }
  login(credentials: any): Observable<any> {
    if (credentials.username === 'testuser' && credentials.password === 'password') {
      return of({ success: true, message: 'Login successful' });
    } else {
      return of({ success: false, message: 'Invalid credentials' });
    }
  }
}
