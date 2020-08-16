import React, {useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            /*margin: theme.spacing(1),*/
            width: '18ch',
            'margin-top': '10px',
            alignItems: 'center',
            justifyContent: 'center'
        },
    },
    input:{
        'margin-top': '20px',
        /*'margin-left': '8px'*/
    }
}));

const FormPropsTextFields= (props)=> {
    const classes = useStyles();

    /*const [state, setState]= useState(10);
*/
    useEffect(()=>{
     //   setState(props.value);
        console.log('props.value:', props.value);
    }, [props.value]);

    return (
        <form className={classes.root} noValidate autoComplete="off">


            <div className={classes.input}>
                <TextField
                    id="outlined-number"
                    label= {props.name}
                    size="small"
                    defaultValue={props.value}
                    value={props.value1? props.value : 0}
                    type="number"
                    onChange={props.changedValue}

                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </div>
        </form>
    );
}

export default FormPropsTextFields;