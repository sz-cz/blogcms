import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'
import { Post } from '../../shared/models/post';
import { UiService } from './ui.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private API_URL = '/posts'

  constructor(private db : AngularFireDatabase, private uiService : UiService, private router : Router) {}

  getPosts = () : Observable<Post[]> => this.db.list<Post>(this.API_URL).snapshotChanges()
        .pipe(map(response => response.map(post => this.addKey(post)).reverse()));

  getPost = (key : string) : Observable<Post> => this.db.object<Post>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(post => this.addKey(post)));

  addPost = (post : Post) =>
    this.db.list<Post>(this.API_URL).push(post)
      .then(() => this.uiService.openSnackBar('success', 'Dodano nowy post'),
      () => this.uiService.openSnackBar('failure', 'Wystąpił błąd'))
      .then(() => this.router.navigate(['']));

  saveChanges = (key : string, post : Post) => this.db.object<Post>(`${this.API_URL}/${key}`).update(post)
      .then(() => this.uiService.openSnackBar('success', 'Zmiany zapisano pomyślnie'),
      () => this.uiService.openSnackBar('failure', 'Wystąpił błąd'))
      .then(() => this.router.navigate(['/admin']));

  removePost = (key : string) => this.db.object<Post>(`${this.API_URL}/${key}`).remove()
      .then(() => this.uiService.openSnackBar('success', 'Usunięto post'),
      () => this.uiService.openSnackBar('failure', 'Wystąpił błąd'))
      .then(() => this.router.navigate(['/admin']));

  addKey(post) {
    return {...post.payload.val(), key: post.key}
  }
}
