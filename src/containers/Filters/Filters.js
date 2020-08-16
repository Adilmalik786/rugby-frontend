import React, {Component, useState} from 'react'
import PlayerName from "./AutoComplete/AutoComplete";
import './Filters.css'
import FormPropsTextFields from "../Form/InputField/InputField";

class Filters extends Component {


    constructor(props) {
        super(props);
        this.state = ({
            Stats: [
                {name: 'Errors'},
                {name: 'Defence'},
                {name: 'Attack'},
                {name: 'SetPiece'},
                {name: 'Summary'},
            ],
            Positions:[
                {name: 'Loosehead Prop', number:[1,17]},
                {name: 'Hooker', number:[2,16]},
                {name: 'Tighthead Prop', number:[3,18]},
                {name: '2nd Row', number:[4,5,19]},
                {name: 'Flanker', number:[6,7,20]},
                {name: 'Scrum Half', number:[9,21]},
                {name: 'Fly Half', number:[10,22]},
                {name: 'Winger', number:[11,14,23]},
                {name: 'Centre', number:[12,13,23]},
                {name: 'Full Back Substitutions', number:[15]},
            ]

        });
        console.log(this.props.players)
    }

    render() {
        return (
            <div className="Filters">
                <PlayerName name="Player Name" items={this.props.players} selectFilter={this.props.selectPlayerName}/>
                <PlayerName name="Position" items={this.state.Positions} selectFilter={this.props.selectPosition}/>
                  <PlayerName name="Statistics" items={this.state.Stats} selectFilter={this.props.selectStats}/>
                {/*<FormPropsTextFields name="Ranking"/>*/}
            </div>
        );
    }
}

export default Filters