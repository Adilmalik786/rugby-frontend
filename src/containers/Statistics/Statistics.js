import React, {useEffect, useState} from 'react';
import './Statistics.css';
import AttackTable from "./Tables/Attack/Attack";
import DefenceTable from "./Tables/Defence/Defence";
import ErrorsTable from "./Tables/Errors/Errors";
import SetPiece from "./Tables/setPiece/setPiece";
import Summary from "./Tables/Summary/Summary";

const Statistics = (props)=>{


    return (
        <div className="Statistics" >
            <h1> {props.name} </h1>
            {props.name === 'Attack' ?
                <AttackTable data={props.data}/>:
                props.name === 'Defence'?
                   <DefenceTable data={props.data}/> :
                    props.name === 'Errors'?
                        <ErrorsTable data={props.data} /> :
                        props.name === 'SetPiece'?
                            <SetPiece data={props.data}/> :
                            props.name === 'Summary'?
                                <Summary  data={props.data}  />:<></>

            }

        </div>
    );
}

export default Statistics;