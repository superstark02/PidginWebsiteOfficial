import React, { Component } from 'react'
import MappBar from '../Components/mAppBar'
import MyAppBar from '../Components/AppBar'
import '../CSS/Home.css'
import '../CSS/Pages/Contact-Us.css'
import '../CSS/Pages/Doubt-Sessions.css'
import Footer from '../Components/Footer'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { classes, tenth, eleventh, twelveth } from '../Database/Constants/doubt-sessions-classes'
import { Button } from '@material-ui/core'


export class DoubtSessions extends Component {

    state = {
        class: "11th",
        subject: "",
        subjects_list:[]
    }

    setClass = (classes) => {
        this.setState({class:classes})
        
        switch (classes) {
            case '10th':
                this.setState({subjects_list:tenth})
                console.log(tenth)
                break;
            case '11th':
                this.setState({subjects_list:eleventh})
                break;
            case '12th':
                this.setState({subjects_list:twelveth})
                break;
            default:
                break;
        }
    }

    componentDidMount(){
        this.setClass();
    }

    render() {
        return (
            <div>
                <div className="mobile" >
                    <MappBar />
                </div>
                <MyAppBar />
                <div className="contact-wallpaper-overlay wrap" >
                    <div>
                        <div style={{ fontWeight: "100", letterSpacing: '2px' }} >
                            Introducing
                        </div>
                        <div className="future-of-learning" >
                            Pidgin MEET
                        </div>
                    </div>
                </div>
                <div className="sessions-wallpaper" ></div>

                <div className="wrap" style={{ margin: "40px 0px" }} >

                    <div className="home-width-container" >
                        <h1>
                            Have any problems in understanding?
                        </h1>
                            Resolve all your problems in concept understandin, questions, and other doubts here for all
                            subjects. Meet experts in your given subjects and remove all doubts in an hour.


                        <div className="wrap" style={{flexWrap:"wrap"}} >
                            <div className="pidgin-meet-card-steps" >
                                <h1>Step 1</h1>
                                <h2 style={{ color: "#f50057" }} >Book</h2>
                                <div>
                                    Fill details. Book a session.
                                </div>
                            </div>

                            <div className="pidgin-meet-card-steps" >
                                <h1>Step 2</h1>
                                <h2 style={{ color: "#f50057" }} >Get Link</h2>
                                <div>
                                    After booking, you will be provided with a link and time to meet the teacher.
                                </div>
                            </div>

                            <div className="pidgin-meet-card-steps" >
                                <h1>Step 3</h1>
                                <h2 style={{ color: "#f50057" }} >Meet</h2>
                                <div>
                                    Meet with teacher through the link provided, on Google meet.
                                </div>
                            </div>
                        </div>


                        <div className="wrap" style={{ flexWrap: "wrap" }} >
                            <div className="pidgin-meet-card" >
                                <div className="pidgin-meet-card-header" >
                                    Pidgin MEET
                                </div>
                                <h1>1 hour</h1>
                                <h2 style={{ color: "#f50057" }} >Rs. 100</h2>
                                <div>
                                    Inidividual online session with an expert in your provided subject.
                                </div>
                            </div>

                            <div className="pidgin-meet-plate" >
                                <h1 >
                                    Book Your SESSION
                                </h1>
                                <div className="pidgin-meet-form wrap" style={{ flexWrap: "wrap" }} >
                                    <div className="pidgin-meet-text-field">
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            label="Select"
                                            value={this.state.class}
                                            helperText="Please select your standard"
                                            color="secondary"
                                            variant="outlined"
                                            onChange={(e)=>{this.setClass(e.target.value)}}
                                        >
                                            {classes.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.value}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>

                                    <div className="pidgin-meet-text-field">
                                        {
                                            this.state.class === 'Other' ? (
                                                <TextField
                                                    id="standard-select-currency"
                                                    label="Select"
                                                    value={this.state.subject}
                                                    helperText="Please select your subject"
                                                    color="secondary"
                                                    variant="outlined"
                                                >
                                                </TextField>
                                            ):(
                                                <TextField
                                                    id="standard-select-currency"
                                                    select
                                                    label="Select"
                                                    value={this.state.subject}
                                                    helperText="Please select your subject"
                                                    color="secondary"
                                                    variant="outlined"
                                                    onChange={(e)=>{this.setState({subject:e.target.value})}}
                                                >
                                                    {this.state.subjects_list.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.value}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            )
                                        }
                                    </div>

                                    <div style={{ width: "100%", margin: "0px" }} className="pidgin-meet-text-field">
                                        <TextField
                                            id="standard-select-currency"
                                            color="secondary"
                                            variant="outlined"
                                            style={{ width: "100%" }}
                                            placeholder="Phone Number"
                                            helperText="Details will be messaged on this number."
                                        >
                                        </TextField>
                                    </div>
                                    <div classes="wrap" >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            style={{margin:'10px'}}
                                        >
                                            SUBMIT
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default DoubtSessions
