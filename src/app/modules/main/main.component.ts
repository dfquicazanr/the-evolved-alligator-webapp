import { Component, OnInit } from '@angular/core';
import {selectPosts} from '~store/selectors/post/post.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '~store/reducers';
import * as PostActions from '~store/actions/post/post.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  posts$ = this.store.select(selectPosts);


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.listPosts();
  }

  listPosts(): void {
    this.store.dispatch(PostActions.loadPosts());
  }
}
