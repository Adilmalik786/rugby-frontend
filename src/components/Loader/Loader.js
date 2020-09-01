import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        'justify-content': 'center',
        'margin-right':'100px',
        'margin-top':'100px',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress
            size={80}
            />
        </div>
    );
}
