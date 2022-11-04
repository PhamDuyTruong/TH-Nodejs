import React from 'react';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@material-ui/core';
import moment from 'moment';
import MoreVert from "@material-ui/icons/MoreVert";
import Favorite from '@material-ui/icons/Favorite';

function Post({post}) {
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
        <CardMedia image="" title="Title"/>
        <CardContent>
            <Typography variant="h5" color="textPrimary">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {post.content}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton>
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