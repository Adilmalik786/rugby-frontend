/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {

            width: '25ch',
            alignItems: 'center',
            "margin-left": "10px",
            justifyContent: 'center'
        },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

const PlayerName = (props) => {


    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Autocomplete
                id="player-name"
                size='small'
                defaultValue={props.default ? props.default: null}
                onChange={props.selectFilter}
                options={props.items.map((option) => option.name)}
                renderInput={(params) => (
                    <TextField {...params} label={props.name} margin="normal" variant="outlined"/>
                )}
            />

        </div>
    );
}

export default PlayerName;