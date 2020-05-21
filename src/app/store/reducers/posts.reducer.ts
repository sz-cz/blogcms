import { Post } from './../../shared/models/post';
import * as Actions from './../actions/post.actions'

export interface PostsState {
    data: Post[],
    loading: boolean,
    error: Error | string
}

const initialState : PostsState = {
    data: [],
    loading: false,
    error: undefined
}

export function PostsReducer(state : PostsState = initialState, action : Actions.PostAction) : PostsState {
    
    switch(action.type) {
        case Actions.PostsActionTypes.LOAD_POSTS: {
            return {...state, loading: true}
        }
        case Actions.PostsActionTypes.LOAD_POSTS_SUCCESS: {
            return {...state, data: action.payload, loading: false}
        }
        case Actions.PostsActionTypes.LOAD_POSTS_FAIL: {
            return {...state, error: action.payload, loading: false}
        }

        case Actions.PostsActionTypes.ADD_POST: {
            return {...state, loading: true}
        }
        case Actions.PostsActionTypes.ADD_POST_SUCCESS: {
            return {...state, data: [...state.data], loading: false}
        }
        case Actions.PostsActionTypes.ADD_POST_FAIL: {
            return {...state, error: action.payload, loading: false}
        }

        case Actions.PostsActionTypes.DELETE_POST: {
            return {...state, loading: true}
        }
        case Actions.PostsActionTypes.DELETE_POST_SUCCESS: {
            return {...state, data: state.data.filter(post => post.id !== +action.payload), loading: false}
        }
        case Actions.PostsActionTypes.DELETE_POST_FAIL: {
            return {...state, error: action.payload, loading: false}
        }

        case Actions.PostsActionTypes.UPDATE_POST: {
            return {...state, loading: true}
        }
        case Actions.PostsActionTypes.UPDATE_POST_SUCCESS: {
            return {...state, data: state.data.filter(post => post.id === +action.key ? post = action.payload : null), loading: false}
        }
        case Actions.PostsActionTypes.UPDATE_POST_FAIL: {
            return {...state, error: action.payload, loading: false}
        }
    }
    return state
}