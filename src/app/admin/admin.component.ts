import { Component, ViewChild } from '@angular/core';
import { PostsService } from '../core/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../core/models/post';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { PostFormComponent } from './post-form/post-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin.full-width',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  @ViewChild('postForm') postForm: PostFormComponent;

  posts$ : Observable<Post[]> = this.postsService.getPosts()

  constructor(private postsService : PostsService, private router : Router, private authService : AuthService, private snackbar : MatSnackBar) { }

  goToPostEdit(post) {
    this.router.navigate(['/admin/posts', post.key])
  }

  removePost(key) {
    this.postsService.removePost(key)
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['/posts']))
  }

  createPost() {
    this.postsService.addPost(this.postForm.form.value)
      .then(this.onSuccess.bind(this), this.onFailure.bind(this))
    this.router.navigate(['/admin'])
  }

  onSuccess() {
    this.snackbar.open('Wpis został utworzony', '', {panelClass: 'snackbar-success'})
  }

  onFailure(error) {
    this.snackbar.open(error.message, '', {panelClass: 'snackbar-failure'})
  }
}
