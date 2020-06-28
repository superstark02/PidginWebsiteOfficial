import React from 'react'
import './app.css'
import Footer from '../Components/Footer'

export default class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="desktop" >
                    <div className="appBar">
                        <div>
                            <a href='/' ><img alt="logo" style={{ marginLeft: '50px', marginTop: '10px' }} src="../Images/app_bg.png" width="70px" /></a>
                        </div>
                        <div>
                            <a href="/pidgin/courses"><button className="sideBut">Courses</button></a>
                            <a href="/pidgin/about-us"><button className="sideBut">About Us</button></a>
                            <a href="/pidgin/contact-us"><button className="sideBut">Contact Us</button></a>
                        </div>
                    </div>

                    <div className="wrap" style={{marginTop: '100px'}}>
                        <div style={{width: '50%', textAlign: 'center'}}>
                            <h2>ABOUT US</h2>
                            <p>
                                Some more text....
                            </p>
                        </div>
                        <div style={{width: '50%'}}>
                            <img alt='s' src="../Images/app_bg.png" width="50%" />
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="para">

                            <div className="wrap">
                                <div>
                                    <img alt="team" src="../Images/team.jpg" />
                                </div>
                                <div>
                                    <h2 className="title">How We Help You ?</h2>
                                    <p>
                                        <ul>
                                            <li>We have put all the near you on your phone.</li>
                                            <li>Find any course, dance, music, maths, science, cooking and much more....</li>
                                            <li>Get prices at low prices, meet new offers everyday.</li>
                                            <li>Get a trial className.</li>
                                            <li>Details of the classes are verified.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div className="wrap">
                                <div>
                                    <h2 className="title">How We Help Tutors ?</h2>
                                    <p>
                                        <ul>
                                            <li>We put their website on the internet.</li>
                                            <li>We provide them technical support.</li>
                                            <li>We provide them necessary equipments.</li>
                                            <li>We provide them marketting platforms and posts on social media.</li>
                                            <li>These all services are provided for low rates.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div>
                                    <img alt="team" src="../Images/support.jpg" />
                                </div>
                            </div>

                            <div className="wrap">
                                <div>
                                    <img alt="team" src="../Images/filter.jpg" />
                                </div>
                                <div>
                                    <h2 className="title">Use The Filters</h2>
                                    <p>
                                        <ul>
                                            <li>We have put all the near you on your phone.</li>
                                            <li>Find any course, dance, music, maths, science, cooking and much more....</li>
                                            <li>Get prices at low prices, meet new offers everyday.</li>
                                            <li>Get a trial className.</li>
                                            <li>Details of the classes are verified.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div className="wrap">
                                <div>
                                    <h2 className="title">What is Only For Women Section ?</h2>
                                    <p>
                                        <ul>
                                            <li>Here we provide you the classNamees which are conducted only for female students.</li>
                                            <li>Safety is priority.</li>
                                            <li>No extra fees for safety charged.</li>
                                            <li>Quality not compromised.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div>
                                    <img alt="team" src="../Images/women.jpg" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}