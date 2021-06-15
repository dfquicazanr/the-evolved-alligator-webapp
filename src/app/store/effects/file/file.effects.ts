import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as FileActions from '~store/actions/file/file.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {FileService} from '~services/file/file.service';
import {CloneService} from '~services/clone/clone.service';
import {of} from 'rxjs';




@Injectable()
export class FileEffects {

  constructor(private actions$: Actions, private fileService: FileService, private cloneService: CloneService) {}

  $upload = createEffect(
    () => this.actions$.pipe(
      ofType(FileActions.uploadFile),
      exhaustMap((payload: {file: File, filePath: string}) =>
        this.fileService.putFileOnSignedUrl(payload.filePath, payload.file).pipe(
          map(data => FileActions.uploadFileSuccess(this.cloneService.clone(data))),
          catchError((error: any) => of(FileActions.uploadFileFailure({error})))
        )
      )
    )
  );

}
