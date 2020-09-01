import React, {Component} from 'react';
import './App.css';
import PersonForm from './containers/Form/PersonForm'
import Button from '@material-ui/core/Button';
import Filters from './containers/Filters/Filters';
import CircularIndeterminate from './components/Loader/Loader';
import CustomizedTables from './containers/Statistics/Statistics';
import axios from 'axios';
import logo from './logo.PNG';
import photo from './img_avatar.png'
import Alert from "@material-ui/lab/Alert";



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
            height: 0,
            weight: 0,
            data: null,
            isSubmit:true,
            loader:false,
            alertFlag:false
        })


    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/v1/user/playersProfiles')
            .then(repos => {
                this.setState({usersName: repos.data.data.users})

            });

    }

    OnSubmit = () => {
        this.setState({alertFlag:true});
        const data = {
            player: this.state.player,
            dob: this.state.dob,
            height: this.state.height,
            weight: this.state.weight,
            photo: this.state.image
        }

        axios.post('http://localhost:5000/api/v1/user/submitForm', {data})
            .then(res => {

            });

        setTimeout(()=>{
            this.setState({alertFlag:false});
        }, 3000);

    }
    onImageSlection = (event) => {


        var file = event.target.files[0];
     //      console.log('filessss:', typeof file)
        this.setState({image: file});
        const reader = new FileReader();
        var urls = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            const result = reader.result
            this.setState({image: result});
        }.bind(this);
     //   console.log(urls); // Would see a path?

    }

    selectPlayerName = (event, value, reason) => {
        this.setState({
            dob: '',
            player:null,
            age:null,
            height: 0,
            weight: 0,
            image: photo
        })
//console.log('dob:', this.state.dob);
        axios.get(`http://localhost:5000/api/v1/user/finduser?name=${value}`)
            .then(res => {

                this.setState({
                    dob: res.data.data.dob,
                    age: res.data.data.age,
                    height: res.data.data.height,
                    weight: res.data.data.weight,
                    image: res.data.data.photo
                })

            });
        this.setState({player: value});

    }

    changeDate = (event) => {
   //     console.log('Date:', event.target.value);
        this.setState({dob: event.target.value})
    }

    selectPosition = async (event, value, reason) => {
        this.setState({position: value});
   //     console.log('position:', value);
        this.setState({data:null});
        if(value !== null) {
            this.setState({stats: value, loader: true, data: null});

            const elem = await axios.get(`http://localhost:5000/api/v1/user/getALLData`, {
                params: {
                    playerName: this.state.player,
                    position: value
                }
            });
      //      console.log('elem:', elem);
            this.setState({
                data: elem.data,
                loader: false
                //  data: Object.values(elem.data.data)
            })
     //       console.log('elem:', this.state.data);
        }
    }
    selectStats = async (event, value, reason) => {



        /*else if (value === 'Errors') {

            const elem = await axios.get(`http://localhost:5000/api/v1/user/getErrorTable`, {
                params: {
                    playerName: this.state.player,
                    position: this.state.position
                }
            });
            this.setState({
                data: Object.values(elem.data.data)
            })

        } else if (value === 'SetPiece') {

            const elem = await axios.get(`http://localhost:5000/api/v1/user/getPieceTable`, {
                params: {
                    playerName: this.state.player,
                    position: this.state.position
                }
            });
            this.setState({
                data: Object.values(elem.data.data)
            })

        } else if (value === 'Attack') {

            const elem = await axios.get(`http://localhost:5000/api/v1/user/getAttackTable`, {
                params: {
                    playerName: this.state.player,
                    position: this.state.position
                }
            });
            this.setState({
                data: Object.values(elem.data.data)
            })

        } else if (value === 'Summary') {

            const elem = await axios.get(`http://localhost:5000/api/v1/user/getSummaryTable`, {
                params: {
                    playerName: this.state.player,
                    position: this.state.position
                }
            });
            this.setState({
                data: Object.values(elem.data.data)
            })

        }*/

    }

    changedWidth = (event) => {
        this.setState({weight: event.target.value});

    }
    changedHeight = (event) => {
        this.setState({height: event.target.value});
    }

    render() {
        return (

            <div className="parent">

                <div className="div1">
                    {this.state.alertFlag ? <Alert severity="success">Form Submitted !</Alert> : <></>}
                    <img src={logo}/>
                </div>
                <div className="div2">
                    <PersonForm onSubmitClicked={this.OnSubmit}
                                onImageSlection={this.onImageSlection}
                                image={this.state.image}
                                changedHeight={this.changedHeight}
                                changedWidth={this.changedWidth}
                                changeDate={this.changeDate}
                                weight={this.state.weight}
                                height={this.state.height}
                                dob={this.state.dob}
                                isSubmit={this.state.player}
                    />
                </div>
                <div className="div3">
                    <Filters players={this.state.usersName} selectPlayerName={this.selectPlayerName}
                             selectPosition={this.selectPosition}

                    />
                    <Button className="print"    onClick={window.print} variant="contained" size="small" color="primary">
                        Print
                    </Button>
                </div>
                <div className="div4">
                    {this.state.data !== null ?
                        <CustomizedTables data={this.state.data}/>:
                        this.state.loader ?
                        <CircularIndeterminate/>: <></>
                    }
                </div>
            </div>
        );
    }
}

export default App;
