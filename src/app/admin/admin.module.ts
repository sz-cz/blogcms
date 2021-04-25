import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../shared/modules/material.module';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module'
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [AdminComponent, PostFormComponent, PostEditComponent],
  exports: [AdminComponent, PostFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule,
    AdminRoutingModule,
    QuillModule.forRoot()
  ]
})
export class AdminModule { }
