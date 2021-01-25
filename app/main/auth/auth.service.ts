import { LoginComponent } from './../auth/login/login.component';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
// import { LoginModule } from './../login/login.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  // redirectUrl: string;
  redirectUrl = '/dashboard';

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(500),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
