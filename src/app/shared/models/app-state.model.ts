import { PostsState } from './../../store/reducers/posts.reducer';

export interface AppState {
  readonly posts: PostsState
}