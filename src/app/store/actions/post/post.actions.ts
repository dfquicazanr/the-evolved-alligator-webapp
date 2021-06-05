import { createAction, props } from '@ngrx/store';
import {Post} from '~models/post/post';

export enum PostActionTypes {
  LoadPosts = '[Post] Load Posts',
  LoadPostsSuccess = '[Post] Load Posts Success',
  LoadPostsFailure = '[Post] Load Posts Failure',
  CreatePost = '[Post] Create Post',
  CreatePostSuccess = '[Post] Create Post Success',
  CreatePostFailure = '[Post] Create Post Failure'
}

export const loadPosts = createAction(
  PostActionTypes.LoadPosts
);

export const loadPostsSuccess = createAction(
  PostActionTypes.LoadPostsSuccess,
  props<{ data: any }>()
);

export const loadPostsFailure = createAction(
  PostActionTypes.LoadPostsFailure,
  props<{ error: any }>()
);

export const createPost = createAction(
  PostActionTypes.CreatePost,
  props<{ post: Post }>()
);

export const createPostSuccess = createAction(
  PostActionTypes.CreatePostSuccess,
  props<{ data: any }>()
);

export const createPostFailure = createAction(
  PostActionTypes.CreatePostFailure,
  props<{ error: any }>()
);
