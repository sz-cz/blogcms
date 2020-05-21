import { Action } from '@ngrx/store'
import { Post } from './../../shared/models/post'

export enum PostsActionTypes {
    ADD_POST = '[POSTS] Add post',
    ADD_POST_FAIL = '[POSTS] Add post fail',
    ADD_POST_SUCCESS = '[POSTS] Add post success',

    LOAD_POSTS = '[POSTS] Load posts',
    LOAD_POSTS_FAIL = '[POSTS] Load posts fail',
    LOAD_POSTS_SUCCESS = '[POSTS] Load posts success',

    DELETE_POST = '[POSTS] Delete post',
    DELETE_POST_FAIL = '[POSTS] Delete post fail',
    DELETE_POST_SUCCESS = '[POSTS] Delete post success',

    UPDATE_POST = '[POSTS] Update post',
    UPDATE_POST_FAIL = '[POSTS] Update post fail',
    UPDATE_POST_SUCCESS = '[POSTS] Update post success',
}

export class LoadPostsAction implements Action {
    readonly type = PostsActionTypes.LOAD_POSTS;
}
export class LoadPostsSuccessAction implements Action {
    readonly type = PostsActionTypes.LOAD_POSTS_SUCCESS;
    constructor(public payload : Array<Post>) {}
}
export class LoadPostsFailAction implements Action {
    readonly type = PostsActionTypes.LOAD_POSTS_FAIL;
    constructor(public payload : Error) {}
}

export class AddPostAction implements Action {
    readonly type = PostsActionTypes.ADD_POST;
    constructor(public payload : Post) {}
}
export class AddPostSuccessAction implements Action {
    readonly type = PostsActionTypes.ADD_POST_SUCCESS;
    // constructor(public payload : Post) {}
}
export class AddPostFailAction implements Action {
    readonly type = PostsActionTypes.ADD_POST_FAIL;
    constructor(public payload : Error) {}
}

export class DeletePostAction implements Action {
    readonly type = PostsActionTypes.DELETE_POST;
    constructor(public payload : string) {}
}
export class DeletePostSuccessAction implements Action {
    readonly type = PostsActionTypes.DELETE_POST_SUCCESS;
    constructor(public payload : string) {}
}
export class DeletePostFailAction implements Action {
    readonly type = PostsActionTypes.DELETE_POST_FAIL;
    constructor(public payload : string) {}
}

export class UpdatePostAction implements Action {
    readonly type = PostsActionTypes.UPDATE_POST;
    constructor(public key : string, public payload : Post) {}
}
export class UpdatePostSuccessAction implements Action {
    readonly type = PostsActionTypes.UPDATE_POST_SUCCESS;
    constructor(public key : string, public payload : Post) {}
}
export class UpdatePostFailAction implements Action {
    readonly type = PostsActionTypes.UPDATE_POST_FAIL;
    constructor(public payload : Error) {}
}

export type PostAction = LoadPostsAction | LoadPostsFailAction | LoadPostsSuccessAction |
    AddPostAction | AddPostFailAction | AddPostSuccessAction |
    DeletePostAction | DeletePostFailAction | DeletePostSuccessAction |
    UpdatePostAction | UpdatePostFailAction | UpdatePostSuccessAction