import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { MaterialModule } from '../shared/modules/material.module';
import { PostComponent } from './post/post.component';
import { FullPostComponent } from './full-post/full-post.component';
import { CoreModule } from '../core/core.module';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  entryComponents: [FullPostComponent],
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  exports: [PostsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
