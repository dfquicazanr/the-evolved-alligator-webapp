import {Action, createReducer, on} from '@ngrx/store';
import * as AuthActions from '~store/actions/auth/auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  loggedIn: Readonly<boolean>;
  authUser?: Readonly<any>;
}

export const initialState: AuthState = {
  loggedIn: false,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (prevState: AuthState) => ({...prevState, loggedIn: true})),
  on(AuthActions.loginFailure, (prevState: AuthState) => ({...prevState, loggedIn: false})),
  on(AuthActions.logoutSuccess, (prevState: AuthState) => ({...prevState, loggedIn: false})),
  on(AuthActions.checkAuthSuccess, (prevState: AuthState, {loggedIn}) => ({...prevState, loggedIn}))
);

export const reducer = (state = initialState, action: Action): AuthState => {
  return authReducer(state, action);
};
