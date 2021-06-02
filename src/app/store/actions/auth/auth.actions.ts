import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutFailure = '[Auth] Logout Failure',
  CheckAuth = '[Auth] Check Auth',
  CheckAuthSuccess = '[Auth] Check Auth Success',
  CheckAuthFailure = '[Auth] Check Auth Failure'
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

export const logout = createAction(
  AuthActionTypes.Logout
);

export const logoutSuccess = createAction(
  AuthActionTypes.LogoutSuccess,
  props<any>()
);

export const logoutFailure = createAction(
  AuthActionTypes.LogoutFailure,
  props<{ error: any }>()
);

export const checkAuth = createAction(
  AuthActionTypes.CheckAuth
);

export const checkAuthSuccess = createAction(
  AuthActionTypes.CheckAuthSuccess,
  props<{ loggedIn: boolean }>()
);

export const checkAuthFailure = createAction(
  AuthActionTypes.CheckAuthFailure,
  props<{ error: any }>()
);
