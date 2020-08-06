import React, {useEffect} from "react";
import './Defence.css'

const DefenceTable = (props)=>{

    return(
        <table className="tableStyle">
            <tr>
                <th rowSpan="2">Years</th>
                <th colSpan="2">Tackle</th>
                <th colSpan="2">Missed</th>
                <th colSpan="1">%</th>
                <th colSpan="2">TO's Won</th>
            </tr>
            <tr>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
            </tr>
            {props.data && props.data.map(item=>{
               return  <tr key={item}>
                    <th>{item.year}</th>
                    <td>{item.tackleCount}</td>
                    <td>{item.tackleAverage}</td>
                    <td>{item.missedCount}</td>
                    <td>{item.missedAverage}</td>
                    <td>{item.percentage}</td>
                    <td>{item.toWon}</td>
                    <td>{item.toWonAve}</td>
                </tr>
            })}

        </table>
    );
}

export default DefenceTable;