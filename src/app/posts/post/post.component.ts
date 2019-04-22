import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
@Input() post : Post

constructor(private router : Router) {}

transformMailToName(mail : string) : string {
  return mail.substring(0, mail.indexOf('@'))
}

showFullPost (post) {
  this.router.navigate(['/posts', post.key])
}

}
