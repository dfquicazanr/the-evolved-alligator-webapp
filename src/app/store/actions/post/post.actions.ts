import { createAction, props } from '@ngrx/store';
import {Post} from '~models/post/post';

export enum PostActionTypes {
  LoadPosts = '[Post] Load Posts',
  LoadPostsSuccess = '[Post] Load Posts Success',
  LoadPostsFailure = '[Post] Load Posts Failure',
  CreatePost = '[Post] Create Post',
  CreatePostSuccess = '[Post] Create Post Success',
  CreatePostFailure = '[Post] Create Post Failure',
  DeletePost = '[Post] Delete Post',
  DeletePostSuccess = '[Post] Delete Post Success',
  DeletePostFailure = '[Post] Delete Post Failure'
}

export const loadPosts = createAction(
  PostActionTypes.LoadPosts
);

export const loadPostsSuccess = createAction(
  PostActionTypes.LoadPostsSuccess,
  props<{ posts: any[] }>()
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

export const deletePost = createAction(
  PostActionTypes.DeletePost,
  props<{ postKey: string }>()
);

export const deletePostSuccess = createAction(
  PostActionTypes.DeletePostSuccess
);

export const deletePostFailure = createAction(
  PostActionTypes.DeletePostFailure,
  props<{ error: any }>()
);
