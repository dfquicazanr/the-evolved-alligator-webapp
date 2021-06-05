import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction(
  '[Post] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ data: any }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const createPost = createAction(
  '[Post] Create Post'
);

export const createPostSuccess = createAction(
  '[Post] Create Post Success',
  props<{ data: any }>()
);

export const createPostFailure = createAction(
  '[Post] Create Post Failure',
  props<{ error: any }>()
);
