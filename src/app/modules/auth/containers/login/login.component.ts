import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '~store/reducers';
import * as AuthActions from '~store/actions/auth/auth.actions';
import {selectLoggedIn} from '~store/selectors/auth/auth.selectors';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginButtonActive = true;
  loggedIn$ = this.store.select(selectLoggedIn);
  redirect: Subscription = new Subscription();

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.listenLoggedIn();
  }

  ngOnDestroy(): void {
    this.redirect.unsubscribe();
  }

  login(): void {
    this.loginButtonActive = false;
    const { username, password } = this.loginForm.getRawValue();
    this.store.dispatch(AuthActions.login({username, password}));
  }

  listenLoggedIn(): void {
    this.redirect = this.loggedIn$.pipe(
      filter(loggedIn => loggedIn)
    ).subscribe(
      () => this.router.navigate(['/admin'])
    );
  }
}
