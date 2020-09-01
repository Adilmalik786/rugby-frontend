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
            <h2> Attack Table</h2>
            { props.data.attack.length>0?
                <AttackTable data={props.data.attack}/>:
                <h4>---- NO Data ----</h4>
            }

            <h2> Defence Table</h2>
            { props.data.defence.length>0?
                   <DefenceTable data={props.data.defence}/>:
                <h4>---- NO Data ----</h4>
            }

            <h2> Error Table</h2>
            { props.data.errors.length>0?
                        <ErrorsTable data={props.data.errors} />:
                <h4>---- NO Data ----</h4>
            }
            <h2> SetPiece Table</h2>
            { props.data.piece.length>0?
                <SetPiece data={props.data.piece}/>:
                <h4>---- NO Data ----</h4>
            }

            <h2> Summary Table</h2>
            {props.data.summary.length > 0 ?
                <Summary data={props.data.summary}/> :
                <h4>---- NO Data ----</h4>
            }


        </div>
    );
}

export default Statistics;