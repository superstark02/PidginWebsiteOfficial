import React from 'react'
import firebase, { db } from '../firebase'
import Footer from '../Components/Footer'
import './log.css'
import VerticalTabs from './tabs'
import google from '.././Images/google.png'
import { Divider } from '@material-ui/core'

export default class Login extends React.Component {

    state = {
        signed: null,
    }

    getUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ signed: user })
            }
        })
    }

    componentDidMount() {
        this.getUser()
    }

    handleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // The signed-in user info.
            //var user = result.user;
        }).catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            db.collection("Login Errors").add({
                errorMessage: errorMessage,
                email: email,
                credential: credential
            })
        });
    }

    render() {
        if (this.state.signed !== null ) {
            return (
                <div>
                    <div className="desktop" style={{ margin: "100px 0px"}} >
                        <div className="wrap" >
                            <div className="log-header" >
                                <div>
                                    <div className="profile-image profile-image-div" style={{ height: '100%', boxShadow: "none" }} >
                                        <img alt="" src={this.state.signed.photoURL} className="profile-image" />
                                    </div>
                                    <div className="display-name">
                                        {this.state.signed.displayName}
                                    </div>
                                    <div className='display-email' >
                                        {this.state.signed.email}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wrap" >
                            <div style={{width:"1000px",padding:"30px 0px",display:"flex"}} >
                                <VerticalTabs/>
                            </div>
                        </div>

                    </div>
                    <div className="mobile" >

                    </div>
                    <Footer/>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div>
                    <div className="desktop bg" style={{ marginTop: "90px",height:"100vh"}} >
                        <div className="wrap">
                            <div className="log-container" >
                                <h1>Sign In</h1>
                                <div className="wrap"style={{height:"100%"}} >
                                    <div>
                                        <div style={{marginBottom:"20px",fontSize:"20px",marginTop:"-50px"}} >
                                            Sign in with Google
                                        </div>
                                        <Divider/>
                                        <button className="login-button" onClick={this.handleLogin} >
                                            <img alt="" src={google} width="25px" style={{marginRight:"10px",marginBottom:"-5px"}} />Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile" >

                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

