import React from 'react';
import {Modal} from '@material-ui/core';
import {useSelector} from 'react-redux'

function ShowModal() {
  const {isShow} = useSelector((state) => state.modal);
  const body = <p>This is body modal</p>;
  return (
    <div>
        <Modal open={isShow} onClose={{}}>
            {body}
        </Modal>
    </div>
  )
}

export default ShowModal