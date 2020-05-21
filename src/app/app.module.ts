import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PostsModule } from './posts/posts.module';
import { MaterialModule } from './shared/modules/material.module';
import { CoreModule } from './core/core.module';
import { PostsRoutingModule } from './posts/posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { PostsReducer } from './store/reducers/posts.reducer'
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effects/posts.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PostsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    AngularFireDatabaseModule,
    CoreModule,
    AngularFireAuthModule,
    PostsRoutingModule,
    StoreModule.forRoot({
      posts: PostsReducer
    }),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
