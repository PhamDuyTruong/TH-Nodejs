import React from 'react';
import {Modal} from '@material-ui/core';

function ShowModal() {
    
  const body = "This is body modal";
  return (
    <div>
        <Modal open={false} onClose={{}}>
            {body}
        </Modal>
    </div>
  )
}

export default ShowModal