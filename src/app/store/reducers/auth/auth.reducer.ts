import {Action, createReducer, on} from '@ngrx/store';
import * as AuthActions from '~store/actions/auth/auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  loggedIn: Readonly<boolean>;
  authUser?: Readonly<any>;
}

export const initialState: AuthState = {
  loggedIn: false
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (prevState: AuthState) => ({...prevState, loggedIn: true}))
);

export const reducer = (state = initialState, action: Action): AuthState => {
  return authReducer(state, action);
};
