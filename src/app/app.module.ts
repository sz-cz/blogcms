import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';

import { PostsModule } from './posts/posts.module';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    AngularFireDatabaseModule,
    CoreModule,
    AdminModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
