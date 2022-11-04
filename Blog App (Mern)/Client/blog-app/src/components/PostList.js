import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {Grid} from '@material-ui/core';
import * as actions from "../redux/actions"
import Post from './Post';


function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);

  // console.log("[posts] ", posts);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest())
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="stretch">
       {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post}/>
        </Grid>
       ))}
    </Grid>
  )
}

export default PostList