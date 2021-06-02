import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {exhaustMap, map, catchError} from 'rxjs/operators';
import {AuthService} from '~services/auth/auth.service';
import * as AuthActions from '~store/actions/auth/auth.actions';
import {of} from 'rxjs';
import {CloneService} from '~services/clone/clone.service';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService, private cloneService: CloneService) {}

  login$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((payload: {username: string, password: string}) =>
        this.authService.signIn(payload.username, payload.password).pipe(
          map(data => AuthActions.loginSuccess(this.cloneService.clone(data))),
          catchError((error: any) => of(AuthActions.loginFailure({error})))
        )
      )
    )
  );

  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logout),
      exhaustMap(() =>
        this.authService.signOut().pipe(
          map(data => AuthActions.logoutSuccess(data)),
          catchError((error: any) => of(AuthActions.logoutFailure({error})))
        )
      )
    )
  );

  checkAuth$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.checkAuth),
      exhaustMap(() =>
        this.authService.isUserAuthenticated().pipe(
          map(loggedIn => AuthActions.checkAuthSuccess({loggedIn})),
          catchError((error: any) => of(AuthActions.checkAuthFailure({error})))
        )
      )
    )
  );

}
