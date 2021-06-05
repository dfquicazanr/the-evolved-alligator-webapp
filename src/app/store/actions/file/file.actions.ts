import { createAction, props } from '@ngrx/store';

export const uploadFiles = createAction(
  '[File] Upload Files'
);

export const uploadFilesSuccess = createAction(
  '[File] Upload Files Success',
  props<{ data: any }>()
);

export const uploadFilesFailure = createAction(
  '[File] Upload Files Failure',
  props<{ error: any }>()
);
