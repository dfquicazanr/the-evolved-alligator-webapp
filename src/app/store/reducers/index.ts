import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '~environments/environment';
import { AuthState } from '~store/reducers/auth/auth.reducer';
import { PostState } from '~store/reducers/post/post.reducer';
import * as AuthReducer from '~store/reducers/auth/auth.reducer';
import * as PostReducer from '~store/reducers/post/post.reducer';

export interface AppState {
  auth: AuthState;
  post: PostState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: AuthReducer.reducer,
  post: PostReducer.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
