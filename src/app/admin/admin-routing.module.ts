import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'posts/:key', component: PostEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
