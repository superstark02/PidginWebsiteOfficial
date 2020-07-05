import React from 'react'
import './app.css'
import Footer from '../Components/Footer'
import MappBar from '../Components/mAppBar'
import { Divider, TextField, Button } from '@material-ui/core'
import MyAppBar from '../Components/AppBar'
import image from "../Images/find-1.jpg"

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class FindMyClass extends React.Component {

    handleChange = (event) => {

    };

    render() {
        return (
            <React.Fragment>
                <div className="desktop">
                    <MyAppBar />
                    <div style={{ marginTop: '150px', marginBottom: '100px' }} className="wrap" >
                        <div style={{ width: "70%", border: "solid 1px grey", height: '600px', borderRadius: '20px', backgroundColor: "white" }} >
                            <div style={{ textAlign: "center", padding: '20px' }} >
                                <h1 style={{ fontWeight: '700', fontSize: '40px' }} >Find My Class</h1>
                            </div>
                            <div className="wrap">
                                <div style={{ width: '50%', overflow: "hidden", height: '100%' }} >
                                    <img src={image} alt="s" width="90%" />
                                </div>
                                <div style={{ width: '50%', overflow: "hidden", height: '100%' }}  >
                                    <h3>We will help you find your desired course. <br />
                                        First, we need some details...</h3>

                                    <TextField placeholder="Subject/Course Name" ></TextField>

                                    <div style={{ margin: "20px 0px" }} >
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">Mode Of the Class</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender1" onChange={this.handleChange}>
                                                <FormControlLabel value="online" control={<Radio color="primary" />} label="Online" />
                                                <FormControlLabel value="offline" control={<Radio color="primary" />} label="Offline" />
                                                <FormControlLabel value="both" control={<Radio color="primary" />} label="Any" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>

                                    <TextField placeholder="Age/Standard/Level" ></TextField> <br /><br />
                                    <TextField placeholder="Your Phone Number" ></TextField>

                                    <div style={{ marginTop: "20px" }} >
                                        <Button variant="contained" color="primary">SUBMIT</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile">
                    <MappBar />
                    <div className="wrap" style={{flexDirection:"column"}} >
                        <div style={{ width: '100%', overflow: "hidden", height: '100%' }} >
                            <img src={image} alt="s" width="100%" />
                        </div>
                        <div style={{ width: '80%', overflow: "hidden", height: '100%' }}  >
                            <h3>We will help you find your desired course. <br />
                                        First, we need some details...</h3>

                            <TextField placeholder="Subject/Course Name" ></TextField>

                            <div style={{ margin: "20px 0px" }} >
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Mode Of the Class</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1" onChange={this.handleChange}>
                                        <FormControlLabel value="online" control={<Radio color="primary" />} label="Online" />
                                        <FormControlLabel value="offline" control={<Radio color="primary" />} label="Offline" />
                                        <FormControlLabel value="both" control={<Radio color="primary" />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <TextField placeholder="Age/Standard/Level" ></TextField> <br /><br />
                            <TextField placeholder="Your Phone Number" ></TextField>

                            <div style={{ margin: "20px 0px" }} >
                                <Button variant="contained" color="primary">SUBMIT</Button>
                            </div>

                        </div>
                    </div>
                    <Divider />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}