import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
}

export const login = createAction(
  AuthActionTypes.Login,
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<any>()
);

export const loginFailure = createAction(
  AuthActionTypes.LoginFailure,
  props<{ error: any }>()
);
