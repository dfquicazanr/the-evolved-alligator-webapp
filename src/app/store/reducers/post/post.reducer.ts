import { createReducer, on } from '@ngrx/store';
import * as PostActions from '~store/actions/post/post.actions';


export const postFeatureKey = 'post';

export interface PostState {
  posts: any[];
}

export const initialState: PostState = {
  posts: []
};


export const reducer = createReducer(
  initialState,
  on(PostActions.loadPostsSuccess, (prevState: PostState, { posts }) => ({...prevState, posts}))
);

