import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from "@material-ui/core/Avatar";
import './Upload.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        display: 'none',
    },
}));

const UploadButtons = (props)=>  {
    const classes = useStyles();


    return (
        <div className={classes.root}>

                <img src={props.image} alt="Avatar" />

            <input accept="image/*" className={classes.input} id="icon-button-file" type="file"
            onChange={props.onImageSlection}
            />
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </div>
    );
}

export default UploadButtons