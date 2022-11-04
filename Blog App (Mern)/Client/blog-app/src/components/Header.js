import React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'lighter',
        padding: "20px 0"
    }
}))

function Header() {
    const classes = useStyle();
  return (
    <Typography variant="h4" align="center" className={classes.container}>
        Blog
    </Typography>
  )
}

export default Header