import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {exhaustMap, map, catchError} from 'rxjs/operators';
import {AuthService} from '~services/auth/auth.service';
import * as AuthActions from '~store/actions/auth/auth.actions';
import {of} from 'rxjs';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((payload: {username: string, password: string}) =>
        this.authService.signIn(payload.username, payload.password).pipe(
          map(data => AuthActions.loginSuccess(data)),
          catchError((error: any) => of(AuthActions.loginFailure({error})))
        )
      )
    )
  );

}
