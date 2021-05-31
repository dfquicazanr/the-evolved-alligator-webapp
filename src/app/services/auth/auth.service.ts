import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signIn(username: string, password: string): Observable<any> {
    return from(Auth.signIn(username, password));
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

  async getCurrentToken(): Promise<string> {
    const currentUser = await Auth.currentAuthenticatedUser();
    const jwtToken = currentUser.signInUserSession.idToken.jwtToken;
    console.log(currentUser);
    return jwtToken;
  }
}
