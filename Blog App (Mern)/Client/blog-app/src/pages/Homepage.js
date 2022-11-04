import React from 'react';
import {Container, Fab} from "@material-ui/core";
import Header from '../components/Header';
import PostList from '../components/PostList';
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}))

function Homepage() {
  const classes = styles();
  return (
    <Container maxWidth="lg" className="">
        <Header />
        <PostList />
        <Fab color="primary" className={classes.fab}>
           <AddIcon />
        </Fab>
    </Container>
  )
}

export default Homepage