import { Action, createReducer, on } from '@ngrx/store';


export const postFeatureKey = 'post';

export interface PostState {
  items: any[];
}

export const initialState: PostState = {
  items: []
};


export const reducer = createReducer(
  initialState,
);

