import React from "react";
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
            <tr>
                <th>19/18</th>
                <td>12</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>
            <tr>
                <th>19/18</th>
                <td>12</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>
            <tr>
                <th>19/18</th>
                <td>12</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>
            <tr>
                <th>19/18</th>
                <td>12</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>
            <tr>
                <th>19/18</th>
                <td>12</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>

        </table>
    );
}

export default DefenceTable;