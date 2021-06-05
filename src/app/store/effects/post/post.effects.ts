import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as PostActions from '~store/actions/post/post.actions';
import * as FileActions from '~store/actions/file/file.actions';
import {catchError, exhaustMap, map, switchMap, take} from 'rxjs/operators';
import {PostService} from '~services/post/post.service';
import {Store} from '@ngrx/store';
import {Post} from '~models/post/post';
import {FileActionTypes} from '~store/actions/file/file.actions';
import {of} from 'rxjs';
import {CloneService} from '~services/clone/clone.service';


@Injectable()
export class PostEffects {

  constructor(private store: Store, private actions$: Actions, private postService: PostService, private cloneService: CloneService) {}

  $create = createEffect(
    () => this.actions$.pipe(
      ofType(PostActions.createPost),
      exhaustMap((payload: {post: Post}) => {
          this.store.dispatch(FileActions.uploadFiles({file: payload.post.resources[0].file}));
          return this.actions$.pipe(
            ofType(FileActions.uploadFilesSuccess, FileActions.uploadFilesFailure),
            take(1),
            switchMap(action => action.type === FileActionTypes.UploadFilesSuccess ?
              this.postService.create(payload.post).pipe(
                map(data => PostActions.createPostSuccess(this.cloneService.clone(data))),
                catchError((error: any) => of(PostActions.createPostFailure({error})))
              ) : of(PostActions.createPostFailure({error: 'Error'}))
            )
          );
        }
      )
    )
  );
}
