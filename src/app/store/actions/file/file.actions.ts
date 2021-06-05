import { createAction, props } from '@ngrx/store';

export enum FileActionTypes {
  UploadFiles = '[File] Upload Files',
  UploadFilesSuccess = '[File] Upload Files Success',
  UploadFilesFailure = '[File] Upload Files Failure'
}

export const uploadFiles = createAction(
  FileActionTypes.UploadFiles,
  props<{file: File}>()
);

export const uploadFilesSuccess = createAction(
  FileActionTypes.UploadFilesSuccess,
  props<{ data: any }>()
);

export const uploadFilesFailure = createAction(
  FileActionTypes.UploadFilesFailure,
  props<{ error: any }>()
);
