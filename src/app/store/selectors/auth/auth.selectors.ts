import { createSelector } from '@ngrx/store';
import { AppState } from '~store/reducers';

export const selectLoggedIn = createSelector(
  (state: AppState) => state.auth.loggedIn,
  (loggedIn: Readonly<boolean>) => loggedIn
);
