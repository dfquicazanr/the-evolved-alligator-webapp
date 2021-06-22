import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {RoutedPostComponent} from './containers/routed-post/routed-post.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'posts/:postKey', component: RoutedPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
