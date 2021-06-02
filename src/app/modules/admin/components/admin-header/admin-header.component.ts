import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '~store/reducers';
import * as AuthActions from '~store/actions/auth/auth.actions';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

}
