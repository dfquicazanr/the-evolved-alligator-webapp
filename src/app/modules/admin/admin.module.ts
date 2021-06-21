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
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { YesNoDialogComponent } from './container/yes-no-dialog/yes-no-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminPostsComponent,
    AdminStatsComponent,
    AdminTagsComponent,
    AdminUsersComponent,
    YesNoDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
