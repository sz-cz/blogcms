import { Component, OnInit } from '@angular/core';
import { PostsService } from '../core/services/posts.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Post } from '../shared/models/post';
import { AppState } from '../shared/models/app-state.model';
import { LoadPostsAction } from '../store/actions/post.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})

export class PostsComponent implements OnInit {
  posts$ : Observable<Post[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>

 constructor(private store : Store<AppState>) {}

  ngOnInit() {
    this.posts$ = this.store.select(store => store.posts.data)
    // this.store.dispatch(new LoadPostsAction());
  }
}
