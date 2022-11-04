import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {updatePost} from '../redux/actions';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@material-ui/core';
import moment from 'moment';
import MoreVert from "@material-ui/icons/MoreVert";
import Favorite from '@material-ui/icons/Favorite';
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    media: {
        height: 200,
      },
}))

function Post({post}) {
    const dispatch = useDispatch();
    const classes = styles();

    const handleLikeClick = useCallback(() => {
        dispatch(updatePost.updatePostRequest({...post, likeCount: post.likeCount + 1}))
    }, [dispatch, post]);


  return (
    <Card>
        <CardHeader
          avatar={<Avatar>A</Avatar>}
          title= {post.author}
          subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
          action={
            <IconButton>
                <MoreVert/>
            </IconButton>
          }
        >
        </CardHeader>
        <CardMedia image={post.attachment} title="Title" className={classes.media}/>
        <CardContent>
            <Typography variant="h5" color="textPrimary">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {post.content}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton onClick={handleLikeClick}>
                <Favorite />
                <Typography component="span" color="textSecondary">
                   {`${post.likeCount} likes`}
                </Typography>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Post