import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostFormComponent } from '../post-form/post-form.component';
import { tap } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post';
import { UiService } from 'src/app/core/services/ui.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.model';
import { DeletePostAction, UpdatePostAction } from 'src/app/store/actions/post.actions';

@Component({
  selector: 'app-post-edit.full-width',
  templateUrl: './post-edit.component.html',
  styleUrls: ['../admin.component.sass']
})

export class PostEditComponent implements AfterViewInit {
  @ViewChild('postForm') postForm : PostFormComponent;
  post : Post;

  constructor(
    private postService : PostsService, 
    private route : ActivatedRoute,
    private router : Router,
    private uiService : UiService,
    private store : Store<AppState>) { }

  saveChanges = () : void => this.store.dispatch(new UpdatePostAction(this.post.key+'', this.postForm.form.value));

  removePost = (key : string) : void => this.store.dispatch(new DeletePostAction(key));

  ngAfterViewInit() {
    this.loadPost()
  }

  private loadPost() : void {
    const key = this.route.snapshot.params['key'];
    this.postService.getPost(key).pipe(
      tap(post => this.postForm.setPost(post)))
        .subscribe(post => this.post = post);
  }
}
