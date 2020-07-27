import React from "react";
import './Errors.css'

const ErrorsTable = (props)=>{
    return(
        <table className="tableStyle">
            <tr>
                <th rowSpan="2">Years</th>
                <th colSpan="2">TO's Conc</th>
                <th colSpan="2">Pens Cons</th>
            </tr>
            <tr>
                <th>Total</th>
                <th>Avg</th>
                <th>Total</th>
                <th>Avg</th>
            </tr>
            <tr>
                <th>19/18</th>
                <td>Bill Gates</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>
            <tr>
                <th>19/18</th>
                <td>Bill Gates</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>
            <tr>
                <th>19/18</th>
                <td>Bill Gates</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>
            <tr>
                <th>19/18</th>
                <td>Bill Gates</td>
                <td>55</td>
                <td>55</td>
                <td>55</td>
            </tr>

        </table>
    );
}

export default ErrorsTable;