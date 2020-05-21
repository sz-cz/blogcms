import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadPostsAction, PostsActionTypes, LoadPostsSuccessAction, LoadPostsFailAction, AddPostAction, AddPostFailAction, AddPostSuccessAction, DeletePostAction, DeletePostFailAction, DeletePostSuccessAction, UpdatePostAction, UpdatePostFailAction, UpdatePostSuccessAction } from '../actions/post.actions'
import { of } from 'rxjs';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/shared/models/post';

@Injectable()
export class PostsEffects {

  @Effect() loadPosts$ = this.actions$
    .pipe(
      ofType<LoadPostsAction>(PostsActionTypes.LOAD_POSTS),
      mergeMap(
        () => this.postsService.getPosts()
          .pipe(
            map((data : Post[] )=> {
              return new LoadPostsSuccessAction(data)
            }),
            catchError(error => of(new LoadPostsFailAction(error)))
          )
      ),
  )

  @Effect() addPost$ = this.actions$
  .pipe(
    ofType<AddPostAction>(PostsActionTypes.ADD_POST),
    mergeMap(
      (data) => this.postsService.addPost(data.payload)
        .then(
          ()=> {
            return new AddPostSuccessAction()
          }).catch(error => of(new AddPostFailAction(error)))
        )
    )

  @Effect() deletePost$ = this.actions$
  .pipe(
    ofType<DeletePostAction>(PostsActionTypes.DELETE_POST),
    mergeMap(
      (data) => this.postsService.removePost(data.payload)
        .then(
          ()=> {
            return new DeletePostSuccessAction(data.payload)
          }).catch(error => of(new DeletePostFailAction(error)))
        )
    )

  @Effect() updatePost$ = this.actions$
  .pipe(
    ofType<UpdatePostAction>(PostsActionTypes.UPDATE_POST),
    mergeMap(
      (data) => this.postsService.saveChanges(data.key, data.payload)
        .then(
          ()=> {
            return new UpdatePostSuccessAction(data.key, data.payload)
          }).catch(error => of(new UpdatePostFailAction(error)))
        )
    )

  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) { }
}