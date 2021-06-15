import { Component, OnInit } from '@angular/core';
import {FileService} from '~services/file/file.service';
import {Store} from '@ngrx/store';
import * as PostActions from '~store/actions/post/post.actions';
import {Post} from '~models/post/post';


@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {
  testText = '';

  constructor(private store: Store, private fileService: FileService) { }

  ngOnInit(): void {
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
}
