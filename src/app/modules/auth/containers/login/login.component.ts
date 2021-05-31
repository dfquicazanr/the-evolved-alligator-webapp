import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '~services/auth/auth.service';
import {Store} from "@ngrx/store";
import {AppState} from "~store/reducers";
import * as AuthActions from "~store/actions/auth/auth.actions";
import {selectLoggedIn} from "~store/selectors/auth/auth.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginButtonActive = true;
  loggedIn$ = this.store.select(selectLoggedIn);

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginButtonActive = false;
    const { username, password } = this.loginForm.getRawValue();
    this.store.dispatch(AuthActions.login({username, password}));
  }
}
