import { createSelector } from '@ngrx/store';
import {AppState} from '~store/reducers';

export const selectPosts = createSelector(
  (state: AppState) => state.post.posts,
  (posts: any[]) => posts
);

export const selectCurrentPost = createSelector(
  (state: AppState) => state.post.currentPost,
  (post: any) => post
);
