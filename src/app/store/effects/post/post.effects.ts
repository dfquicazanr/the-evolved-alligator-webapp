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

  $list = createEffect(
    () => this.actions$.pipe(
      ofType(PostActions.loadPosts),
      exhaustMap(() =>
        this.postService.list().pipe(
          map((posts: any[]) => PostActions.loadPostsSuccess({posts})),
          catchError( (error: any) => of(PostActions.loadPostsFailure(error)))
        )
      )
    )
  );

  $get = createEffect(
    () => this.actions$.pipe(
      ofType(PostActions.getPost),
      exhaustMap((payload: {postKey: string}) =>
        this.postService.get(payload.postKey).pipe(
          map((post: any) => PostActions.getPostSuccess({post})),
          catchError( (error: any) => of(PostActions.getPostFailure(error)))
        )
      )
    )
  );

  $create = createEffect(
    () => this.actions$.pipe(
      ofType(PostActions.createPost),
      exhaustMap((payload: {post: Post}) => {
          const postWithoutFiles = {
            ...payload.post,
            resources: payload.post.resources.map(resource => {
              const {file, ...resourceWithoutFile} = resource;
              return resourceWithoutFile;
            })
          };
          const resourcesFiles = payload.post.resources.map(resource => ({file: resource.file}));
          return this.postService.create(postWithoutFiles).pipe(
            switchMap((createdPost: Post) => {
              const {s3SignedUrl = ''} = createdPost.resources[0];
              const {file} = resourcesFiles[0];
              this.store.dispatch(FileActions.uploadFile({file, filePath: s3SignedUrl}));
              return this.actions$.pipe(
                ofType(FileActions.uploadFileSuccess, FileActions.uploadFileFailure),
                take(1),
                switchMap(action => {
                  if (action.type === FileActionTypes.UploadFileSuccess) {
                    this.store.dispatch(PostActions.loadPosts());
                    return of(PostActions.createPostSuccess(this.cloneService.clone(createdPost)));
                  } else {
                    return of(PostActions.createPostFailure({error: 'Error'}));
                  }
                }
                )
              );
            }),
            catchError((error: any) => of(PostActions.createPostFailure({error})))
          );
        }
      )
    )
  );

  $delete = createEffect(
    () => this.actions$.pipe(
      ofType(PostActions.deletePost),
      exhaustMap((payload: {postKey: string}) =>
      this.postService.delete(payload.postKey).pipe(
        map(() => {
          this.store.dispatch(PostActions.loadPosts());
          return PostActions.deletePostSuccess();
        }),
        catchError( (error: any) => of(PostActions.deletePostFailure(error)))
      )
      )
    )
  );
}
