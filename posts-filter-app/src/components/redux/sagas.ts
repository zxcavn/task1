import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, REQUEST_POST_COMMENTS, fetchPostsSuccess, fetchPostsFailure, receivePostComments, fetchPostCommentsFailure, PostType, CommentType, FetchCommentsAction } from './actions';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure, UserType } from './actions';

function* fetchPosts() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    console.log('Fetching URL:', url);
    const response: Response = yield call(fetch, url);
    const data: PostType[] = yield response.json();
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure((error as Error).message));
  }
}

function* fetchPostComments(action: FetchCommentsAction) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`;
    console.log('Fetching URL:', url);
    const response: Response = yield call(fetch, url);
    const data: CommentType[] = yield response.json();
    console.log('Received data:', data); 
    yield put(receivePostComments({ postId: action.payload, comments: data }));
  } catch (error) {
    yield put(fetchPostCommentsFailure((error as Error).message));
  }
  }
  

function* fetchUsers() {
try {
  const url = 'https://jsonplaceholder.typicode.com/users';
  console.log('Fetching URL:', url);
  const response: Response = yield call(fetch, url);
  const data: UserType[] = yield response.json();
  yield put(fetchUsersSuccess(data));
} catch (error) {
  yield put(fetchUsersFailure((error as Error).message));
}
}

export function* saga() {
yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
yield takeEvery(REQUEST_POST_COMMENTS, fetchPostComments);
}
