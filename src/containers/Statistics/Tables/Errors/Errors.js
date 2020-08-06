import React, {useEffect} from "react";
import './Errors.css'

const ErrorsTable = (props)=>{

    useEffect(()=>{
        console.log(props.data)
    },[props.data]);
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
            {props.data && props.data.map((item,index) => {
               return  <tr key={`${item.year}+${item.turnOverCount}+${index}`}>
                    <th>{item.year}</th>
                    <td>{item.turnOverCount}</td>
                    <td>{item.turnOverAverage}</td>
                    <td>{item.penaltyCount}</td>
                    <td>{item.penaltyAverage}</td>
                </tr>
            })
            }


        </table>
    );
}

export default ErrorsTable;