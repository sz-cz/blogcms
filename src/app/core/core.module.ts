import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class CoreModule { }
