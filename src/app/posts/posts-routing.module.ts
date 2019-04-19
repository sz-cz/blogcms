import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { FullPostComponent } from './full-post/full-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent},
  { path: 'posts/:key', component: FullPostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule { }