  import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchPostsRequest } from './components/redux/actions';
  import Post from './components/Post/post';
  import { StateType } from './components/redux/reducers';
  import { PostType } from './components/redux/actions';
  import UserList from './components/Users/UserList';
  import { AppBar, Container, Toolbar} from '@material-ui/core';
  import {Pagination } from '@material-ui/lab';
  import {BrowserRouter} from 'react-router-dom'

  function App() {
    const dispatch = useDispatch();
    const posts = useSelector((state: StateType) => state.filteredPosts.length > 0 ? state.filteredPosts : state.posts);
    const [page, setPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
      dispatch(fetchPostsRequest());
    }, [dispatch]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <>
      <BrowserRouter>
        <AppBar>
          <Container>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
            </Toolbar>
          </Container>
        </AppBar>

        <main style={{ marginTop: '100px' }}>
          <div className="App">
            <UserList />
            {currentPosts.map((post: PostType) => (
              <Post key={post.id} userId={post.userId} body={post.body} id={post.id} title={post.title} />
            ))}
            <Pagination
              count={Math.ceil(posts.length / postsPerPage)}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />
          </div>
        </main>
        </BrowserRouter>
      </>
    );
  }

  export default App;
