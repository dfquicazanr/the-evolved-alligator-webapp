import { Component, OnInit } from '@angular/core';
import {FileService} from '~services/file/file.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {
  testText = '<head><title>kk</title></head><body><div>kk</div></body>';

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    const data = new Blob([this.testText], {
      type: 'text/html'
    });
    this.fileService.getSignedS3Url('tea-posts', 'kk.html')
      .subscribe(
        d => {
          const url = d.url;
          console.log(data);
          const file = this.fileService.blobToFile(data, 'kk.html');
          console.log(file);
          this.fileService.putFileOnSignedUrl(url, file).subscribe(da => console.log(da));
        }
      );
  }

  logBlob(): void {
    const data = new Blob([this.testText], {
      type: 'text/plain'
    });
    console.log(data);
    const textFile = window.URL.createObjectURL(data);
    console.log(textFile);
    console.log(typeof textFile);
  }
}
