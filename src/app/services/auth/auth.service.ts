import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import {from, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signIn(username: string, password: string): Observable<any> {
    return from(Auth.signIn(username, password)).pipe(
      tap(data => console.log(data))
    );
  }

  signOut(): Observable<any> {
    return from(Auth.signOut());
  }

  setNewPassword(username: string, oldPassword: string, newPassword: string): Observable<any> {
    return this.signIn(username, oldPassword)
      .pipe(
        map(user => Auth.completeNewPassword(user, newPassword))
      );
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(user => Auth.changePassword(user, oldPassword, newPassword)
        )
      );
  }

  isUserAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        tap(data => console.log(data)),
        map(() => true),
        catchError(() => of(false)),
        tap(data => console.log(data)),
      );
  }

  async getCurrentToken(): Promise<string> {
    const currentUser = await Auth.currentAuthenticatedUser();
    const jwtToken = currentUser.signInUserSession.idToken.jwtToken;
    console.log(currentUser);
    return jwtToken;
  }
}
