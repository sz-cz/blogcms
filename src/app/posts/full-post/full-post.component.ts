import { Component, OnInit, Inject } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/core/services/posts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.sass']
})
export class FullPostComponent implements OnInit {
  post : Post

  constructor(private route : ActivatedRoute, private postService : PostsService) { 
    this.post;
  }

  ngOnInit() {
    this.loadPost();
  }

  private loadPost() {
    const key = this.route.snapshot.params['key'];
    this.postService.getPost(key)
        .subscribe(post => this.post = post)
  }
  
}
