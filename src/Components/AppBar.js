import React from 'react'
import firebase from '../firebase'

export default class MyAppBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="appBar">
                        <div>
                            <a href='/' ><img alt="logo" style={{ marginLeft: '50px', marginTop: '10px' }} src="../Images/app_bg.png" width="70px" /></a>
                        </div>
                        <div>
                            {firebase.auth().currentUser ? (
                                <a href="/pidgin/login" >
                                    <img src={firebase.auth().currentUser.photoURL} alt="user" width="50px" />
                                </a>
                            ):(
                                <a href="/pidgin/login" ><button className="sideBut">Sign In</button></a>
                            )}
                            <a href="/pidgin/courses"><button className="sideBut">How To Use</button></a>
                            <a href="/pidgin/about-us"><button className="sideBut">About Us</button></a>
                            <a href="/pidgin/contact-us"><button className="sideBut">Contact Us</button></a>
                            <a href="/pidgin/help"><button className="sideBut">Help</button></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}