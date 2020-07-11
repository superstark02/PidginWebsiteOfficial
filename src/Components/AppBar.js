import React from 'react'
import firebase from '../firebase'
import './app-bar.css'

import { connect } from 'react-redux'
import { getNumbers } from '../actions/get-action.js'
import { Link } from 'react-router-dom'

class MyAppBar extends React.Component {

    state = {
        user: []
    }

    getUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({user:user})
            }
        });
    }

    componentDidMount() {
        getNumbers();
        this.getUser()
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="appBar">
                        <div>
                            <a href='/' ><img alt="logo" style={{ marginLeft: '50px', marginTop: '10px' }} src="../Images/app_bg.png" width="70px" /></a>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center" }} >
                            {
                                this.state.user === null ? (
                                    <a href="/pidgin/login" >
                                        <div className="sideBut" >
                                            Sign In
                                        </div>
                                    </a>
                                ) : (
                                    <a href="/pidgin/login" >
                                        <div className="account sideBut" >
                                            <img src={this.state.user.photoURL} alt="" width="30px" className="user-image" />
                                        </div>
                                    </a>
                                )
                            }
                            <Link to="/pidgin/cart">
                                <button className="sideBut">
                                    Cart {
                                        this.props.basketProps.basketNumbers === 0 ? (
                                            ""
                                        ) : (
                                                ("(" + this.props.basketProps.basketNumbers + ")")
                                            )
                                    }
                                </button>
                            </Link>
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

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(MyAppBar);