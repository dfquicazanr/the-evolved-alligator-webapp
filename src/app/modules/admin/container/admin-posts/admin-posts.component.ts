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
  testText = '<head><title>kk</title></head><body><div>kk</div></body>';

  constructor(private store: Store, private fileService: FileService) { }

  ngOnInit(): void {
    const data = new Blob([this.testText], {
      type: 'text/html'
    });
    const file = this.fileService.blobToFile(data, 'kk.html');
    this.fileService.getSignedS3Url('tea-posts', 'kk.html')
      .subscribe(
        d => {
          const url = d.url;
          this.fileService.putFileOnSignedUrl(url, file).subscribe(da => console.log(da));
        }
      );
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
    const data = new Blob([this.testText], {
      type: 'text/html'
    });
    return this.fileService.blobToFile(data, 'kk.html');
  }
}
