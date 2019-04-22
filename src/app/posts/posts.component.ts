import { Component, OnInit } from '@angular/core';
import { PostsService } from '../core/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../core/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  posts$ : Observable<Post[]> = this.postsService.getPosts();

 constructor(private postsService : PostsService, private route : ActivatedRoute) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe()
  }

}
