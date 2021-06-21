import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetFilePipe} from '~pipes/get-file/get-file.pipe';
import {AsyncSafeHtmlPipe} from '~pipes/safe-html/safe-html.pipe';



@NgModule({
  declarations: [
    GetFilePipe,
    AsyncSafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetFilePipe,
    AsyncSafeHtmlPipe
  ]
})
export class PipesModule { }
