import React from "react";
import './setPiece.css'

const SetPiece = (props) => {
    return (
        <table className="tableStyle">
            <tr>
                <th rowSpan="2">Years</th>
                <th colSpan="2">LO Throws</th>
                <th colSpan="1">%</th>
                <th colSpan="2">LO Jumps</th>
                <th colSpan="2">LO Steals</th>
            </tr>
            <tr>
                <th>Total</th>
                <th>Avg</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
            </tr>

            {props.data && props.data.map((item, index) => {
                return <tr key={`${item.year}+${index}`}>
                    <th>{item.year}</th>
                    <td>{item.lineoutCount}</td>
                    <td>{item.lineoutAverage}</td>
                    <td>{item.percentage}</td>
                    <td>{item.loJumpsCount}</td>
                    <td>{item.loJumpsAverage}</td>
                    <td>{item.loStealsCount}</td>
                    <td>{item.loStealsAverage}</td>
                </tr>
            })}

        </table>
    );
}

export default SetPiece;