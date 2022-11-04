import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {Grid} from '@material-ui/core';
import * as actions from "../redux/actions"
import Post from './Post';


function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest())
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={6}>
          <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
          <Post />
      </Grid>
    </Grid>
  )
}

export default PostList