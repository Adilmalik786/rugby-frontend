import React from "react";
import './Attack.css';

const AttackTable = (props)=>{
    return(
        <table className="tableStyle">
            <tr>
                <th rowSpan="2">Years</th>
                <th colSpan="2">Ball Carries</th>
                <th colSpan="2">Mtrs</th>
                <th colSpan="1">Mtrs Avg</th>
                <th colSpan="2">Tries</th>
                <th colSpan="2">Offloads</th>
                <th colSpan="2">Tackle Breaks</th>
                <th colSpan="2">Line Breaks</th>
                <th colSpan="2">Passes</th>
                <th colSpan="2">Kicks</th>
            </tr>
            <tr>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
            </tr>
            {props.data && props.data.map((item,index)=>{
               return  <tr key={`${item.year}+${index}`}>
                    <th>{item.year}</th>
                    <td>{item.ballCarries}</td>
                    <td>{item.ballCarriesAvg}</td>
                    <td>{item.meters}</td>
                    <td>{item.metersAvg}</td>
                    <td>{item.mtsAvg}</td>
                    <td>{item.tries}</td>
                    <td>{item.triesAvg}</td>
                    <td>{item.offloads}</td>
                    <td>{item.offloadsAvg}</td>
                    <td>{item.tackleBreaks}</td>
                    <td>{item.tackleBreaksAvg}</td>
                    <td>{item.lineBreak}</td>
                    <td>{item.lineBreakAvg}</td>
                    <td>{item.passes}</td>
                    <td>{item.passesAvg}</td>
                    <td>{item.kicks}</td>
                    <td>{item.kicksAvg}</td>
                </tr>
            })
            }

        </table>
    );
}

export default AttackTable;