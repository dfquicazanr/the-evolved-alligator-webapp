import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '~store/reducers';
import {selectCurrentPost} from '~store/selectors/post/post.selectors';
import * as PostActions from '~store/actions/post/post.actions';

@Component({
  selector: 'app-routed-post',
  templateUrl: './routed-post.component.html',
  styleUrls: ['./routed-post.component.scss']
})
export class RoutedPostComponent implements OnInit {

  post$ = this.store.select(selectCurrentPost);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const {postKey} = params;
      this.store.dispatch(PostActions.getPost({postKey}));
    });


  }
}
