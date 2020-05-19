import { Component, ViewChild } from '@angular/core';
import { PostsService } from '../core/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { PostFormComponent } from './post-form/post-form.component';

@Component({
  selector: 'app-admin.full-width',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  @ViewChild('postForm') postForm: PostFormComponent;
  posts$ : Observable<Post[]> = this.postsService.getPosts();

  constructor(
    private postsService : PostsService, 
    private router : Router, 
    private authService : AuthService) { }

  goToPostEdit = (post : Post) : Promise<boolean> => this.router.navigate(['/admin/posts', post.key]);

  removePost = (key : string) : Promise<boolean> => this.postsService.removePost(key);

  createPost = () : Promise<boolean> => this.postsService.addPost(this.postForm.form.value);

  logout = () : Promise<boolean> => this.authService.logout();
}