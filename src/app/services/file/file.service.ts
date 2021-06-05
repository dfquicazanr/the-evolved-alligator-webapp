import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {environment} from '~environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  filesUrl = `${environment.apiPath}/files`;

  private httpClientWithoutInterceptor: HttpClient;

  constructor(private httpClient: HttpClient, private httpBackend: HttpBackend) {
    this.httpClientWithoutInterceptor = new HttpClient(this.httpBackend);
  }

  getSignedS3Url(bucketName: string, fileName: string): Observable<any> {
    return this.httpClient.get(
      `${this.filesUrl}/signed-url`,
      {params: {
          bucketName,
          fileName
        }
      }
    );
  }

  putFileOnSignedUrl(url: string, file: File): Observable<any> {
    return this.httpClientWithoutInterceptor.put(url, file, {headers: {'Content-Type': 'text/html'}});
  }

  blobToFile(theBlob: Blob, fileName: string): File {
    return new File([theBlob], fileName);
  }

}
