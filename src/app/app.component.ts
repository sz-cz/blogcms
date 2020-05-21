import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './shared/models/app-state.model';
import { LoadPostsAction } from './store/actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'cms';

  constructor(private store : Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPostsAction());
  }
}
