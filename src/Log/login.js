import React from 'react'
import MyAppBar from '../Components/AppBar'
import firebase, { db } from '../firebase'

export default class Login extends React.Component {

    state = {
        signed: null,
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

    handleLogout = () => {
        firebase.auth().signOut().then(function () {
            console.log("Logged Out")
        }).catch(function (error) {
            console.log(error)
        });
    }

    render() {
        if (firebase.auth().currentUser) {
            return (
                <div>
                    <div className="desktop" style={{backgroundColor:"red",height:"100vh",width:"100%"}} >  
                        <MyAppBar />
                    </div>
                    <div className="mobile" >
                        
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <MyAppBar />
            </React.Fragment>
        )
    }
}

