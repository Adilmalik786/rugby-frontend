import React, {Component, useState} from 'react';
import './App.css';
import PersonForm from './containers/Form/PersonForm'
import Layout from "./components/Layout/Layout";
import Filters from './containers/Filters/Filters';
import CustomizedTables from './containers/Statistics/Statistics'
import axios from 'axios';
import logo from './logo.PNG';

import photo from './img_avatar.png'

class App extends Component {


    constructor() {
        super();
        this.state = ({
            stats: null,
            position: null,
            usersName: [],
            image: photo,
            player: null,
            dob: null,
            age: null,
            height: null,
            weight: null,
            data: null

        })

        /*        this.changedWidth = this.changedWidth.bind(this);
                this.changedHeight = this.changedHeight.bind(this);*/
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/v1/user/playersProfiles')
            .then(repos => {
                this.setState({usersName: repos.data.data.users})
                // console.log(this.state.usersName)

            });
        console.log('asdasdad:', this.state.usersName);
    }

    OnSubmit = () => {
        console.log('phot:', this.state.image);
        const data = {
            player: this.state.player,
            dob: this.state.dob,
            height: this.state.height,
            weight: this.state.weight,
            photo: this.state.image
        }
        console.log('data:', data);
        axios.post('http://localhost:5000/api/v1/user/submitForm', {data})
            .then(res => {
                console.log(res);
            });

        console.log('clicked');
    }
    onImageSlection = (event) => {
        //   console.log('image:', image);
        //          console.log('filling:', event.target.files[0])
        var file = event.target.files[0];
        const reader = new FileReader();
        var urls = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            const result = reader.result

            this.setState({image: result});

        }.bind(this);
        console.log(urls); // Would see a path?
        //      console.log('file:', file)

        this.setState({image: file});
        console.log('file:', event.target.files[0]);
    }

    selectPlayerName = (event, value, reason) => {

        axios.get(`http://localhost:5000/api/v1/user/?name=${value}`)
            .then(res => {
                this.setState({
                    dob: res.data.data.user.dob,
                    age: res.data.data.user.dob,
                    height: res.data.data.user.dob,
                    weight: res.data.data.user.dob,
                    photo: res.data.data.user.dob
                })
                console.log('response:', res);
            });
        this.setState({player: value});
        console.log('player:', value);
    }

    changeDate = (event) => {
        console.log('Date:', event.target.value);
        this.setState({dob: event.target.value})
    }

    selectPosition = (event, value, reason) => {
        this.setState({position: value});
        console.log('position:', value);
    }
    selectStats = async (event, value, reason) => {
        this.setState({stats: value});
        console.log('position:', this.state.position);
        if (value === 'Defence') {
            console.log('stats:', value);
            const elem = await axios.get(`http://localhost:5000/api/v1/user/getDefenceTable`, {
                params: {
                    playerName: this.state.player,
                    position: this.state.position
                }
            });
            this.setState({
                data: Object.values(elem.data.data)
            })
            console.log('response:', this.state.data);
        } else
        if (value === 'Errors') {
            console.log('stats:', value);
            const elem = await axios.get(`http://localhost:5000/api/v1/user/getErrorTable`, {
                params: {
                    playerName: this.state.player,
                    position: this.state.position
                }
            });
            this.setState({
                data: Object.values(elem.data.data)
            })
            console.log('response:', this.state.data);
        } else if (value === 'SetPiece') {
            console.log('stats:', value);
            const elem = await axios.get(`http://localhost:5000/api/v1/user/getPieceTable`, {
                params: {
                    playerName: this.state.player,
                    position: this.state.position
                }
            });
            this.setState({
                data: Object.values(elem.data.data)
            })
            console.log('response:', this.state.data);
        }

    }

    changedWidth = (event) => {
        this.setState({weight: event.target.value});
        console.log('width:', event.target.value)
        /*this.setState({weight:event.target.value});
        console.log(this.state.weight);*/
    }
    changedHeight = (event) => {
        this.setState({height: event.target.value});
        console.log('height:', event.target.value)
    }

    render() {
        return (

            <div className="parent">
                <div className="div1">
                    <img src={logo}/>
                </div>
                <div className="div2">
                    <PersonForm onSubmitClicked={this.OnSubmit}
                                onImageSlection={this.onImageSlection}
                                image={this.state.image}
                                changedHeight={this.changedHeight}
                                changedWidth={this.changedWidth}
                                changeDate={this.changeDate}
                    />
                </div>
                <div className="div3">
                    <Filters players={this.state.usersName} selectPlayerName={this.selectPlayerName}
                             selectPosition={this.selectPosition}
                             selectStats={this.selectStats}
                    />
                </div>
                <div className="div4">
                    <CustomizedTables name={this.state.stats} data={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default App;
