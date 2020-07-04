import React from 'react'
import './app.css'
import Footer from '../Components/Footer'
import image from '../Images/help.jpg'
import { FaPhone } from 'react-icons/fa'
import { TextField, Button } from '@material-ui/core'
import MappBar from '../Components/mAppBar'
import { Divider } from '@material-ui/core'
import MyAppBar from '../Components/AppBar'

export default class Help extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="desktop" >
                    <MyAppBar/>

                    <div className="wrap" style={{ marginTop: '100px' }}>
                        <div style={{ width: '50%', textAlign: 'center' }}>
                            <h2>HELP</h2>
                            <p>
                                We are here to help you.<br></br>
                                Report all your problems here.
                            </p>
                        </div>
                        <div style={{ width: '50%' }}>
                            <img alt='s' src="../Images/app_bg.png" width="50%" />
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="para" style={{ width: '1200px' }} >
                            <img src={image} alt="s" />
                        </div>
                        <div className="wrap" style={{ flexDirection: 'column' }} >
                            <div style={{ textAlign: 'center' }} >
                                Got any issues with payment or Refund? <br />
                                Or not satified with service? <br />
                                Please tell us:<br></br>
                                <h2>Helpline Numbers</h2>
                                <table>
                                    <tr>
                                        <td><FaPhone /></td>
                                        <td>+91 99101 97196</td>
                                    </tr>
                                    <tr>
                                        <td><FaPhone /></td>
                                        <td>+91 97184 10831</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="wrap" >
                                <div style={{ marginTop: '100px' }} >
                                    <h2>FeedBack Section</h2>
                                    <div>
                                        <TextField variant="outlined" color="primary" placeholder="Help Us Improve.." multiline style={{ width: '500px' }} />
                                    </div>
                                    <div className="wrap" style={{ marginTop: '30px' }} >
                                        <Button variant="contained" color="primary" >SUBMIT</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile" >
                    <MappBar />
                    <h2 style={{ textAlign: 'center' }} >HELP</h2>
                    <p style={{ textAlign: 'center' }} >
                        We are here to help you.<br></br>
                        Report all your problems here.
                    </p>
                    <div className="wrap" >
                        <img src={image} width="80%" alt="s" />
                    </div>

                    <div style={{ textAlign: 'center' }} >
                        Got any issues with payment or Refund? <br />
                                Or not satified with service? <br />
                                Please tell us:<br></br>
                        <h2>Helpline Numbers</h2>
                        <FaPhone /> +91 99101 97196 <br/>
                        <FaPhone /> +91 97184 10831
                    </div>

                    <div className="wrap" >
                        <div style={{ marginTop: '20px',marginBottom:'80px' }} >
                            <h2>FeedBack Section</h2>
                            <div>
                                <TextField variant="outlined" color="primary" placeholder="Help Us Improve.." multiline  />
                            </div>
                            <div className="wrap" style={{ marginTop: '30px' }} >
                                <Button variant="contained" color="primary" >SUBMIT</Button>
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