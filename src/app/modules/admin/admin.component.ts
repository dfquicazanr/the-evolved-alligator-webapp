import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '~store/reducers';
import {Router} from '@angular/router';
import {selectLoggedIn} from '~store/selectors/auth/auth.selectors';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  loggedIn$ = this.store.select(selectLoggedIn);
  redirect: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private router: Router) { }


  ngOnInit(): void {
    this.listenLoggedIn();
  }

  ngOnDestroy(): void {
    this.redirect.unsubscribe();
  }

  listenLoggedIn(): void {
    this.redirect = this.loggedIn$.pipe(
      filter(loggedIn => !loggedIn)
    ).subscribe(
      () => this.router.navigate(['/auth/login'])
    );
  }

}
