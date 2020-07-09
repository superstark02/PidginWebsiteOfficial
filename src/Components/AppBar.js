import React from 'react'
import firebase from '../firebase'
import './app-bar.css'

export default class MyAppBar extends React.Component {

    state = {
        user:null
    }

    componentDidMount(){
        const user = firebase.auth().currentUser
        this.setState(user)
    }

    render() {
        var user = firebase.auth().currentUser
        return (
            <React.Fragment>
                <div>
                    <div className="appBar">
                        <div>
                            <a href='/' ><img alt="logo" style={{ marginLeft: '50px', marginTop: '10px' }} src="../Images/app_bg.png" width="70px" /></a>
                        </div>
                        <div style={{display:'flex',alignItems:"center"}} >
                            {user ? (
                                <a href="/pidgin/login" >
                                    <div className="account sideBut" >
                                        <img src={user.photoURL} alt="user" width="30px" className="user-image" />
                                    </div>
                                </a>
                            ):(
                                <a href="/pidgin/login" ><button className="sideBut">Sign In</button></a>
                            )}
                            <a href="/pidgin/cart"><button className="sideBut">Cart</button></a>
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