import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import MappBar from '../Components/mAppBar'
import Footer from '../Components/Footer'
import '../CSS/Home.css'
import '../CSS/Pages/About.css'
import '../CSS/Pages/Contact-Us.css'
import emailjs from 'emailjs-com';

export class Feedback extends Component {

    sendMail = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('gmail', 'template_h67d3rY4_clone', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <div className="mobile" >
                    <MappBar />
                </div>
                <div className="contact-wallpaper-overlay wrap" >
                    <div>
                        <div className="future-of-learning" >
                            Feedback
                            </div>
                    </div>
                </div>
                <div className="feedback-wallpaper" ></div>

                <div className="wrap" style={{ margin: "40px 0px" }} >
                    <div className="home-width-container" >

                        <div className="about-content" >
                            <div className="about-content-display" >
                                <div className="about-text" >
                                    <h1 style={{ fontSize: "40px", marginBottom: "40px" }} >
                                        Please provide your feedback
                                        </h1>
                                    <form onSubmit={this.sendMail} style={{ display: "flex", flexDirection: "column" }} >
                                        <input className="standard-input" name="name" placeholder="Name" required />
                                        <input className="standard-input" name="email" placeholder="Email" />
                                        <input className="standard-input" name="phone" placeholder="Phone" />
                                        <textarea style={{ minHeight: "100px" }} type="multiline" className="standard-input" name="feedback" placeholder="Feedback" required />
                                        <input className="standard-button" type="submit" value="SUBMIT" />
                                    </form>
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

export default Feedback
