import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Container, Fab} from "@material-ui/core";
import Header from '../components/Header';
import PostList from '../components/PostList';
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from '@material-ui/core/styles';
import {showModal} from '../redux/actions'
import ShowModal from '../components/ShowModal';

const styles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}))

function Homepage() {
  const classes = styles();
  const dispatch = useDispatch();
  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" className="">
        <Header />
        <PostList />
        <ShowModal />
        <Fab color="primary" className={classes.fab} onClick={openCreatePostModal}>
           <AddIcon />
        </Fab>
    </Container>
  )
}

export default Homepage