import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { MaterialModule } from '../material/material.module';
import { PostComponent } from './post/post.component';
import { FullPostComponent } from './full-post/full-post.component';
import { CoreModule } from '../core/core.module';
import { PostsRoutingModule } from './posts-routing.module';
// import {MatCardModule} from '@angular/material';

@NgModule({
  entryComponents: [FullPostComponent],
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  exports: [PostsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
