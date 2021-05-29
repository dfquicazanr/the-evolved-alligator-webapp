import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {catchError, mergeMap} from 'rxjs/operators';
import {AuthService} from '~services/auth/auth.service';

@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return fromPromise(this.authService.getCurrentToken()).pipe(
      mergeMap(authToken => {
        const authReq = request.clone({ setHeaders: { Authorization: authToken } });
        return next.handle(authReq);
      }),
      catchError(err => {
        console.log(err);
        return next.handle(request);
      })
    );
  }
}
