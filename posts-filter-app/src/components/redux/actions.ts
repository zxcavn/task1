export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const REQUEST_POST_COMMENTS = 'REQUEST_POST_COMMENTS';
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';
export const FETCH_POST_COMMENTS_FAILURE = 'FETCH_POST_COMMENTS_FAILURE';
export const FILTER_POSTS_BY_USER = 'FILTER_POSTS_BY_USER';

export const filterPostsByUser = (userId: number) => ({ type: FILTER_POSTS_BY_USER, payload: userId });
export const RESET_POST_FILTER = 'RESET_POST_FILTER';

export const resetPostFilter = () => ({ type: RESET_POST_FILTER });


export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: CommentType[]; 
};

  export type CommentType = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body:string;
  }; 

  export type FetchCommentsAction = {
    type: typeof REQUEST_POST_COMMENTS;
    payload: number;
  };
  
  export const requestPostComments = (postId: number) => ({ type: REQUEST_POST_COMMENTS, payload: postId });
  

  export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users: UserType[]) => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = (error: string) => ({ type: FETCH_USERS_FAILURE, payload: error });

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (posts: PostType[]) => ({ type: FETCH_POSTS_SUCCESS, payload: posts });
export const fetchPostsFailure = (error: string) => ({ type: FETCH_POSTS_FAILURE, payload: error });
export const receivePostComments = (payload: { postId: number; comments: CommentType[] }) => ({
  type: RECEIVE_POST_COMMENTS,
  payload
});

export const fetchPostCommentsFailure = (error: string) => ({ type: FETCH_POST_COMMENTS_FAILURE, payload: error });
