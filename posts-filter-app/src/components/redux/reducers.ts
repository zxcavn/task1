import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, RECEIVE_POST_COMMENTS, FETCH_POST_COMMENTS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FILTER_POSTS_BY_USER,RESET_POST_FILTER } from './actions';

import { PostType, UserType, CommentType } from './actions';


export type StateType = {
  loading: boolean;
  posts: PostType[];
  users: UserType[]; 
  error: string;
  comments: CommentType[];
  filteredPosts: PostType[];
};

const initialState: StateType = {
loading: false,
posts: [] as PostType[],
comments: [],
users: [], 
error: '',
filteredPosts: [] as PostType[]
};



type ActionType = {
  type: string;
  payload: any; 

};



export const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FILTER_POSTS_BY_USER:
  return {
    ...state,
    filteredPosts: state.posts.filter(post => post.userId === action.payload)
  };
  case RESET_POST_FILTER:
  return {
    ...state,
    filteredPosts: [...state.posts] // Сбрасываем фильтр, копируя все посты
  };
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: '' };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, posts: [], error: action.payload };
      case RECEIVE_POST_COMMENTS:
        return {
          ...state,
          loading: false,
          posts: state.posts.map(post =>
            post.id === action.payload.postId
              ? { ...post, comments: action.payload.comments }
              : post
          ),
          error: ''
        };
      

    case FETCH_POST_COMMENTS_FAILURE:
      return { ...state, loading: false, comments: [], error: action.payload };
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: '' };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};