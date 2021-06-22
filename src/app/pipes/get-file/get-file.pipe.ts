import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from 'rxjs';
import {FileService} from '~services/file/file.service';

@Pipe({
  name: 'getFile'
})
export class GetFilePipe implements PipeTransform {

  constructor(private fileService: FileService) {}

  transform(value: string): Observable<string> {
    return this.fileService.getFile(value);
  }

}
