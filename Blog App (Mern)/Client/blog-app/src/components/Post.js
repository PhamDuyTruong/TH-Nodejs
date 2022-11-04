import React from 'react';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@material-ui/core';

import MoreVert from "@material-ui/icons/MoreVert";
import Favorite from '@material-ui/icons/Favorite';

function Post() {
  return (
    <Card>
        <CardHeader
          avatar={<Avatar>A</Avatar>}
          title="This is title"
          subheader="Nov 04, 2022"
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
                This is Title post
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                This is Content post
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton>
                <Favorite />
                <Typography component="span" color="textSecondary">
                    10 likes
                </Typography>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Post