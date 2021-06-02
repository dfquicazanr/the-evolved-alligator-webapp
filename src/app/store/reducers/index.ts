import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '~environments/environment';
import { AuthState } from '~store/reducers/auth/auth.reducer';
import * as AuthReducer from '~store/reducers/auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: AuthReducer.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
