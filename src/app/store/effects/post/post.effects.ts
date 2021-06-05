import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as PostActions from '~store/actions/post/post.actions';
import * as FileActions from '~store/actions/file/file.actions';
import {exhaustMap, map} from 'rxjs/operators';
import {PostService} from '~services/post/post.service';
import {Store} from '@ngrx/store';


@Injectable()
export class PostEffects {

  constructor(private store: Store, private actions$: Actions, private postService: PostService) {}

  /*$create = createEffect(
    () => this.actions$.pipe(
      ofType(PostActions.createPost),
      exhaustMap((post: any) =>
        this.store.dispatch(FileActions.uploadFiles(post.file))
      )
    )
  );*/

}
