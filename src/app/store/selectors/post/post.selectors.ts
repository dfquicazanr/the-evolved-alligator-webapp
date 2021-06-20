import { createSelector } from '@ngrx/store';
import {AppState} from '~store/reducers';

export const selectPosts = createSelector(
  (state: AppState) => state.post.posts,
  (posts: any[]) => posts
);
