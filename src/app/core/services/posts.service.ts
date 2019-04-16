import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private API_URL = '/posts'

  getPosts = () : Observable<Post[]> => {
      return this.db.list<Post>(this.API_URL).snapshotChanges()
        .pipe(map(response => response.map(post => this.addKey(post))))
  }

  getPost = (key : string) : Observable<Post> => {
    return this.db.object<Post>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(post => this.addKey(post)))
  }

  addPost = (post : Post) => {
    return this.db.list<Post>(this.API_URL).push(post)
  }

  saveChanges(key : string, post : Post) {
    return this.db.object<Post>(`${this.API_URL}/${key}`).update(post)
  }

  removePost(key : string) {
    return this.db.object<Post>(`${this.API_URL}/${key}`).remove()
  }

  addKey(post) {
    return {...post.payload.val(), key: post.key}
  }
  constructor(private db : AngularFireDatabase) {}
}
