import { Component, OnInit } from '@angular/core';
import {FileService} from '~services/file/file.service';
import {Store} from '@ngrx/store';
import * as PostActions from '~store/actions/post/post.actions';
import {Post} from '~models/post/post';
import {selectPosts} from '~store/selectors/post/post.selectors';
import {AppState} from '~store/reducers';
import {MatDialog} from '@angular/material/dialog';
import {YesNoDialogComponent} from "../yes-no-dialog/yes-no-dialog.component";
import {filter, map} from "rxjs/operators";
import {Observable} from "rxjs";


@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {
  testText = '';
  posts$ = this.store.select(selectPosts);

  constructor(private store: Store<AppState>, private fileService: FileService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listPosts();
  }

  listPosts(): void {
    this.store.dispatch(PostActions.loadPosts());
  }

  createPost(): void {
    const file = this.prepareFile();
    const post: Post = {
      title: 'Test post',
      date: new Date().toISOString(),
      resources: [
        {
          filename: 'kk.html',
          file
        }
      ]
    };
    this.store.dispatch(PostActions.createPost({ post }));
  }

  prepareFile(): File {
    console.log(this.testText);
    const data = new Blob([this.testText], {
      type: 'text/html'
    });
    return this.fileService.blobToFile(data, 'kk.html');
  }

  deletePost(post: any): void {
    this.openYesNoDialog('Delete Post', 'Are you sure you want to delete this post?')
      .pipe(filter(response => response))
      .subscribe(() => console.log('delete post'));
  }

  openYesNoDialog(title: string, content: string): Observable<boolean> {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '300px',
      data: { title, content }
    });

    return dialogRef.afterClosed().pipe(
      map(result => !!result)
    );
  }
}
