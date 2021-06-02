import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {AdminPostsComponent} from './container/admin-posts/admin-posts.component';
import {AdminStatsComponent} from './container/admin-stats/admin-stats.component';
import {AdminTagsComponent} from './container/admin-tags/admin-tags.component';
import {AdminUsersComponent} from './container/admin-users/admin-users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts'
      },
      {
        path: 'posts',
        component: AdminPostsComponent
      },
      {
        path: 'stats',
        component: AdminStatsComponent
      },
      {
        path: 'tags',
        component: AdminTagsComponent
      },
      {
        path: 'users',
        component: AdminUsersComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
