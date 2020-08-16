import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { createMuiTheme, withStyles,  ThemeProvider } from '@material-ui/core/styles';

/*const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));*/

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});


const useStyles = makeStyles((theme) => ({
    root:{
        'margin-top': '18px',
        'margin-left': '33px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    margin: {
            margin: theme.spacing(1),
        },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const ButtonSizes = (props)=> {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <ThemeProvider theme={theme}>
                <Button onClick={props.clicked} className={classes.margin} disabled={!props.isSubmit} variant="contained" size="small" color="primary" >
                    {props.name}
                </Button>
                </ThemeProvider>
            </div>
    );
}

export default ButtonSizes;