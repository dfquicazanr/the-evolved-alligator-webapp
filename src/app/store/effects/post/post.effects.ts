import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as PostActions from '~store/actions/post/post.actions';
import * as FileActions from '~store/actions/file/file.actions';
import {exhaustMap, switchMap, take} from 'rxjs/operators';
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
          return this.postService.create(payload.post).pipe(
            switchMap((createdPost: Post) => {
              const {file, filePath = ''} = createdPost.resources[0];
              this.store.dispatch(FileActions.uploadFile({file, filePath}));
              return this.actions$.pipe(
                ofType(FileActions.uploadFileSuccess, FileActions.uploadFileFailure),
                take(1),
                switchMap(action => action.type === FileActionTypes.UploadFileSuccess ?
                  of(PostActions.createPostSuccess(this.cloneService.clone(createdPost))) :
                  of(PostActions.createPostFailure({error: 'Error'}))
                )
              );
            })
          );
        }
      )
    )
  );

}
