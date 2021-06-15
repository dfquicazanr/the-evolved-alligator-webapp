import { createAction, props } from '@ngrx/store';

export enum FileActionTypes {
  UploadFile = '[File] Upload Files',
  UploadFileSuccess = '[File] Upload File Success',
  UploadFileFailure = '[File] Upload File Failure'
}

export const uploadFile = createAction(
  FileActionTypes.UploadFile,
  props<{file: File, filePath: string}>()
);

export const uploadFileSuccess = createAction(
  FileActionTypes.UploadFileSuccess,
  props<{ data: any }>()
);

export const uploadFileFailure = createAction(
  FileActionTypes.UploadFileFailure,
  props<{ error: any }>()
);
