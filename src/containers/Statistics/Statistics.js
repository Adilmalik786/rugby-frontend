import React, {useEffect, useState} from 'react';
import './Statistics.css';
import AttackTable from "./Tables/Attack/Attack";
import DefenceTable from "./Tables/Defence/Defence";
import ErrorsTable from "./Tables/Errors/Errors";
import SetPiece from "./Tables/setPiece/setPiece";

const Statistics = (props)=>{


    const table = ()=>{
        console.log()
        if(props.name === 'Attack'){
            return(<AttackTable/>);
        }
        else if(props.name === 'Defence'){
            return(<DefenceTable/>);
        }
        else if(props.name === 'SetPiece'){
            return (<SetPiece/>)
        }
        else if (props.name === 'Errors'){
            return (<ErrorsTable/>)
        }
    };


    return (
        <div className="Statistics" >
            <h1> {props.name} </h1>
            {props.name === 'Attack' ?
                <AttackTable/>:
                props.name === 'Defence'?
                   <DefenceTable/> :
                    props.name === 'Errors'?
                        <ErrorsTable/> :
                        props.name === 'SetPiece'?
                            <SetPiece/> : <></>

            }

        </div>
    );
}

export default Statistics;