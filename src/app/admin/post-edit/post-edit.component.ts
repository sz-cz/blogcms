import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostFormComponent } from '../post-form/post-form.component';
import { tap } from 'rxjs/operators';
import { Post } from 'src/app/core/models/post';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.sass']
})
export class PostEditComponent implements AfterViewInit {
  @ViewChild('postForm') postForm : PostFormComponent

  post : Post

  constructor(private postService : PostsService, private route : ActivatedRoute, private snackBar : MatSnackBar, private router : Router) { }

  saveChanges() {
    this.postService.saveChanges(this.post.key+'', this.postForm.form.value)
      .then(this.onSaveSuccess.bind(this), this.onFailure.bind(this))
  }

  removePost() {
    this.postService.removePost(this.post.key+'')
      .then(this.onRemoveSuccess.bind(this), this.onFailure.bind(this));
  }

  private onSaveSuccess() {
    this.router.navigate(['/admin'])
    this.snackBar.open("Zmiany zapisano pomyślnie", '', {panelClass: 'toast-success'})
  }

  private onRemoveSuccess() {
    this.router.navigate(['/admin'])
    this.snackBar.open("Post usunięto pomyślnie", '', {panelClass: 'toast-success'})
  }

  private onFailure(error) {
    this.snackBar.open(error.message, '', {panelClass: 'toast-fail'})
  }

  ngAfterViewInit() {
    this.loadPost()
  }

  private loadPost() {
    const key = this.route.snapshot.params['key'];
    this.postService.getPost(key).pipe(
      tap(post => this.postForm.setPost(post)))
        .subscribe(post => this.post = post);
  }

}
