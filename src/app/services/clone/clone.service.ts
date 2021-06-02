import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloneService {

  constructor() { }

  clone(object: any): any {
    return JSON.parse(JSON.stringify(object));
  }

}
