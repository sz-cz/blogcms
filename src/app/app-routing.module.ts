import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PostsComponent},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
