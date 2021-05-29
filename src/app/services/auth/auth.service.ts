import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async signIn(username: string, password: string): Promise<any> {
    return Auth.signIn(username, password);
  }

  async signOut(): Promise<any> {
    return Auth.signOut();
  }

  async setNewPassword(username: string, oldPassword: string, newPassword: string): Promise<any> {
    return this.signIn(username, oldPassword).then( user =>
      Auth.completeNewPassword(user, newPassword)
    );
  }

  async changePassword(oldPassword: string, newPassword: string): Promise<any> {
    return Auth.currentAuthenticatedUser()
      .then(user => {
        return Auth.changePassword(user, oldPassword, newPassword);
      });
  }

  async isUserAuthenticated(): Promise<boolean> {
    try {
      await Auth.currentAuthenticatedUser();
      return true;
    } catch (e) {
      return false;
    }
  }

  async getCurrentToken(): Promise<string> {
    const currentUser = await Auth.currentAuthenticatedUser();
    const jwtToken = currentUser.signInUserSession.idToken.jwtToken;
    console.log(currentUser);
    return jwtToken;
  }
}
