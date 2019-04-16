import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AdminComponent } from './admin/admin.component';
import { PostFormComponent } from './admin/post-form/post-form.component';
import { PostEditComponent } from './admin/post-edit/post-edit.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/services/auth.guard';
import { FullPostComponent } from './posts/full-post/full-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: 'posts', component: PostsComponent},
  { path: 'posts/:key', component: FullPostComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    {path: 'new-post', component: PostFormComponent}
  ]},
  { path: 'admin/posts/:key', component: PostEditComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
