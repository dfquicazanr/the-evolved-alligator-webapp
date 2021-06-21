import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'asyncSafeHtml'
})
export class AsyncSafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: Observable<string>): Observable<SafeHtml | undefined> {
    if (value) {
      return value.pipe(
        map(stringValue => this.sanitizer.bypassSecurityTrustHtml(stringValue))
      );
    } else {
      return of(undefined);
    }
  }

}
