import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  // posts$ : Observable<Post[]> = this.postsService.getPosts();


  constructor(private postsService : PostsService, private router : Router) { }

  ngOnInit() {
    // this.postsService.getPosts().subscribe()
  }
}