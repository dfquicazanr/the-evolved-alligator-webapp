import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { PostComponent } from './containers/post/post.component';
import {PipesModule} from '~pipes/pipes.module';
import { RoutedPostComponent } from './containers/routed-post/routed-post.component';


@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent,
    PostComponent,
    RoutedPostComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PipesModule
  ]
})
export class MainModule { }
