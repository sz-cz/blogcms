import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { PostFormComponent } from './post-form/post-form.component';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/models/app-state.model';
import { AddPostAction, DeletePostAction } from '../store/actions/post.actions';

@Component({
  selector: 'app-admin.full-width',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  @ViewChild('postForm', { static: true }) postForm: PostFormComponent;
  posts$ : Observable<Post[]>

  constructor(
    private router : Router, 
    private authService : AuthService,
    private store : Store<AppState>) { }

  goToPostEdit = (post : Post) : Promise<boolean> => this.router.navigate(['/admin/posts', post.key]);

  removePost = (key : string) : void => this.store.dispatch(new DeletePostAction(key));

  createPost = () : void => this.store.dispatch(new AddPostAction(this.postForm.form.value));

  logout = () : Promise<boolean> => this.authService.logout();

  ngOnInit() {
    this.posts$ = this.store.select(store => store.posts.data)
  }
}