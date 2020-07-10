import React from 'react'
import './app.css'
import Footer from '../Components/Footer'
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import MappBar from '../Components/mAppBar'
import { Divider } from '@material-ui/core'

export default class ContactUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="desktop" style={{backgroundColor:'white'}} >

                    <div class="wrap" style={{ marginTop: '100px' }}>
                        <div style={{ width: '50%', textAlign: 'center' }}>
                            <h2>CONTACT US</h2>
                            <p>
                                If you are a teacher and want to join us.<br></br>
                                Then this page is for you.
                            </p>
                        </div>
                        <div style={{ width: '50%' }}>
                            <img alt="s" src="../Images/app_bg.png" width="50%" />
                        </div>
                    </div>

                    <div class="wrap" style={{ marginBottom: '100px' }} >
                        <div class="para">

                            <div class="wrap">
                                <div>
                                    <img alt="team" src="../Images/support1.jpg" width="80%" />
                                </div>
                                <div>
                                    <h2 class="title">How We Support Our Classes</h2>
                                    <h3>If you want to start an education institution, then its for you.</h3>
                                    <p>
                                        <ul>
                                            <li>You will be provided with a classroom if needed.</li>
                                            <li>Furniture would be provided if needed.</li>
                                            <li>You are provided with an amazing website published.</li>
                                            <li>Your business is registered for free</li>
                                            <li>Finally, your classes are published on the app.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div class="wrap">
                                <div>
                                    <h2 class="title">We offer you :</h2>
                                    <p>
                                        <ul>
                                            <li>List the packages and be supportive here...</li>
                                        </ul>
                                    </p>
                                </div>
                                <div>
                                    <img alt="team" src="../Images/employ.jpg" width="80%" />
                                </div>
                            </div>


                            <div style={{ textAlign: 'center', marginTop: '100px' }} >
                                <h2>How to join?</h2>
                                <div>Message us on any of these..</div>
                                <div style={{ color: 'black', fontSize: '40px' }} >
                                    <a href="mailto:ds.techin@gmail.com" ><FaEnvelope style={{ margin: '10px' }} color='black' /></a>
                                    <a href="https://wa.me/919910197196" ><FaWhatsapp style={{ margin: '10px' }} color='black' /></a>
                                    <a href="https://www.facebook.com/Pidgin-104215741310224/" ><FaFacebook style={{ margin: '10px' }} color='black' /></a>
                                    <a href="https://www.instagram.com/pidgin2020/" ><FaInstagram style={{ margin: '10px' }} color='black' /></a>
                                </div>
                                And we will contact you.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile">
                    <MappBar />
                    <h2 style={{ textAlign: 'center' }} >CONTACT US</h2>
                    <p style={{ textAlign: 'center' }} >
                        If you are a teacher and want to join us.<br></br>
                        Then this page is for you.
                    </p>
                    <div className="wrap" >
                        <img src="../Images/support1.jpg" width="80%" alt="s" />
                    </div>

                    <div>
                        <h2 style={{ textAlign: 'center' }} className="title">How We Support Our Classes</h2>
                        <h3 style={{ textAlign: 'center' }}>If you want to start an education institution, then its for you.</h3>
                        <p>
                            <ul>
                                <li>You will be provided with a classroom if needed.</li>
                                <li>Furniture would be provided if needed.</li>
                                <li>You are provided with an amazing website published.</li>
                                <li>Your business is registered for free</li>
                                <li>Finally, your classes are published on the app.</li>
                            </ul>
                        </p>
                    </div>

                    <div className="wrap" >
                        <img src="../Images/employ.jpg" width="80%" alt="s" />
                    </div>

                    <div>
                        <h2 style={{ textAlign: 'center' }} className="title">We offer you :</h2>
                        <p>
                            <ul>
                                <li>List the packages and be supportive here...</li>
                            </ul>
                        </p>
                    </div>

                    <Divider />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}