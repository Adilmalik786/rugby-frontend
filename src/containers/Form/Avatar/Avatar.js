import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
        alignItems: 'center',
        justifyContent: 'center'
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

const ImageAvatars=()=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Image" src="/static/images/avatar/1.jpg" className={classes.large} />
        </div>
    );
}

export default ImageAvatars;