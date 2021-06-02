import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AdminPostsComponent } from './container/admin-posts/admin-posts.component';
import { AdminStatsComponent } from './container/admin-stats/admin-stats.component';
import { AdminTagsComponent } from './container/admin-tags/admin-tags.component';
import { AdminUsersComponent } from './container/admin-users/admin-users.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminPostsComponent,
    AdminStatsComponent,
    AdminTagsComponent,
    AdminUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ]
})
export class AdminModule { }
