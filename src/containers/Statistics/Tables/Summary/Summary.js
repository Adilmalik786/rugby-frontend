import React, {useState} from "react";
import './Summary.css';
import PlayerName from "../../../Filters/AutoComplete/AutoComplete";

const Summary = (props) => {
    const [optionsState, setOptionsState] = useState({
        optionsList:[
            {name:'Ball Carry'},
            {name:'Metres Made'},
            {name:'Defenders Beaten'},
            {name:'Tackle %'},
            {name:'Turnover Won'},
        ]
            /*['Ball Carry','Metres Made','Defenders Beaten','Tackle %','Turnover Won']*/
    });

    const selectOPtion1=()=>{

    }
    const selectOPtion2=()=>{

    }
    const selectOPtion3=()=>{

    }
    const selectOPtion4=()=>{

    }
    const selectOPtion5=()=>{

    }

    return (

        <div>
            <div className="Filters">
                <PlayerName name="Select Option 1" default ='Ball Carry' items={optionsState.optionsList} selectFilter={selectOPtion1}/>
                <PlayerName name="Select Option 2" default ='Metres Made' items={optionsState.optionsList} selectFilter={selectOPtion2}/>
                <PlayerName name="Select Option 3" default ='Defenders Beaten' items={optionsState.optionsList} selectFilter={selectOPtion3}/>
                <PlayerName name="Select Option 4" default ='Tackle %' items={optionsState.optionsList} selectFilter={selectOPtion4}/>
                <PlayerName name="Select Option 5" default ='Turnover Won' items={optionsState.optionsList} selectFilter={selectOPtion5}/>

                {/*<PlayerName name="Select Option 5" items={this.state.Stats} selectFilter={this.props.selectStats}/>*/}
            </div>

        <table className="tableStyle">
            <tr>
                <th rowSpan="1">Years</th>
                <th colSpan="1">Games</th>
                <th colSpan="1">Starts*</th>
                <th colSpan="1">Game Time</th>
                <th colSpan="1">Score</th>
                <th colSpan="1">TP Score</th>
                <th colSpan="1">World Player Ranking</th>
                <th colSpan="1">Position Ranking</th>
                <th colSpan="1">% Ranking World</th>
                <th colSpan="1">% Ranking Position</th>
            </tr>
            {props.data && props.data.map((item, index) => {
                return <tr key={`${item.year}+${index}`}>
                    <th>{item.year}</th>
                    <td>{item.games}</td>
                    <td>NaN</td>
                    <td>{item.gameTime}</td>
                    <td>{item.Score}</td>
                    <td>NaN</td>
                    <td>NaN</td>
                    <td>NaN</td>
                    <td>NaN</td>
                    <td>NaN</td>

                </tr>
            })}

        </table>

        </div>
    );
}

export default Summary;