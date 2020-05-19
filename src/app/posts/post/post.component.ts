import { Component, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
@Input() post : Post;

constructor(private router : Router) {}

showFullPost = (post : Post) : Promise<boolean> => this.router.navigate(['/posts', post.key])
}
