import React, {useCallback} from 'react';
import {Modal} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import { Button, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { hideModal } from '../redux/actions';
const styles = makeStyles((theme) => ({
  paper: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: '0 0 10px 0',
  },
  title: {
    marginBottom: '10px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
  },
  footer: {
    marginTop: '10px',
  },
}))

function ShowModal() {
  const {isShow} = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const classes = styles();

  const handleClose = useCallback(() => {
    dispatch(hideModal());

  }, [dispatch])

  const body = (
    <div className={classes.paper} id='simple-modal-title'>
        <h2>Create new post</h2>
        <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.title}
          required
          label='Title'
          value=""
          onChange={{}}
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          placeholder='Content...'
          value=""
          onChange={{}}
        />
        <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value=""
          onDone={{}}
        />
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={{}}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
        <Modal open={isShow} onClose={handleClose}>
            {body}
        </Modal>
    </div>
  )
}

export default ShowModal