import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '~environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl = `${environment.apiPath}/posts`;


  constructor(private httpClient: HttpClient) { }

  create(post: any): Observable<any> {
    return this.httpClient.post(this.postsUrl, post);
  }
}
