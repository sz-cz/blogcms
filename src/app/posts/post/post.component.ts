import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
@Input() post : Post

constructor(private dialog : MatDialog, private router : Router) {

}

showFullPost (post) {
  this.router.navigate(['/posts', post.key])
}

}
