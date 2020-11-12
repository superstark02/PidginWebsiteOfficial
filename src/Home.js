import React from 'react'
import Footer from './Components/Footer'
import { Link } from 'react-router-dom'
import online from './Images/online.jpg'
import women from './Images/women.jpg'
import astro from './Images/astronaut.jpg'
import find from './Images/find.jpg'
import near from './Images/near.jpg'
import './CSS/Home.css'
import { IconButton, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import getCollection from './Database/getCollection'
import getUser from './Database/getUser'
import firebase, { db } from './firebase'
import play_store from './Images/store.png'
import phone from './Images/Phone.png'
import blogs from './Images/Home/blog-home.jpg'
import webinar from './Images/Home/home-webinars.jpg'
import phone_form from './Images/Home/phone-common-form.png'

import browse from './Images/Home/magnifying.jpg'
import clock from './Images/Home/clock.jpg'
import form from './Images/Home/form.jpg'
import app from './Images/Home/app.png'

const top_cards = [
    {
        name: "Classes Near You",
        img: near,
        url: "0"
    },
    {
        name: "Online Classes",
        img: online,
        url: "online"
    },
    {
        name: "Classes Only For Women",
        img: women,
        url: "women"
    },
    {
        name: "Individual Classes",
        img: astro,
        url: "individual"
    },
    {
        name: "Unable To Find",
        img: find,
        url: "find"
    }
]

class Home extends React.Component {
    state = {
        categories: null,
        user: null,
        search: 0,
    }

    componentDidMount() {

        getCollection("ImagesClassesTrending").then(snapshot => {
            this.setState({ categories: snapshot })
        })

        getUser().then(user => {
            this.setState({ user: user })
        })

    }

    handleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(user => {
            this.setState({ user: user.user.displayName })
        }).catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            db.collection("LoginErrors").doc(email).set(
                {
                    errorMessage: errorMessage,
                    email: email,
                    credential: credential
                }
            )
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="home-overlay " style={{ color: "white", textAlign: "center" }} >
                        <div style={{ height: "28vh", display: "flex", justifyContent: "flex-end", width: "100%" }} >
                            <div style={{ paddingRight: "15%", paddingTop: "30px" }} >
                                {
                                    this.state.user === -1 || this.state.user === null ? (
                                        <Button onClick={this.handleLogin} style={{ textTransform: "none", color: "white" }} >Sign In</Button>
                                    ) : (
                                            <Link to="/pidgin/login" ><Button style={{ textTransform: "none", color: "white" }} >{this.state.user}</Button></Link>
                                        )
                                }
                            </div>
                        </div>
                        <div className="wrap" >
                            <div >
                                <div style={{ fontSize: "80px", fontFamily: "Friendly", marginBottom: "40px" }} >
                                    Pidgin
                                </div>
                                <div className="delivering-education">
                                    Delivering Education
                                </div>
                                <div className="wrap" >
                                    <input
                                        className="home-search-input"
                                        onChange={(e) => { this.setState({ search: e.target.value }) }}
                                        placeholder="Search schools..." />
                                    <div style={{ backgroundColor: "#04BF7B", height: '56px', width: "56px" }} className="wrap" >
                                        <Link to={{
                                            state: {
                                                search: this.state.search
                                            },
                                            pathname: "/schools-near-me"
                                        }} >
                                            <IconButton >
                                                <SearchIcon style={{ color: "white" }} />
                                            </IconButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-wallpaper" ></div>

                    <div className="wrap" style={{ margin: "30px 0px" }} >
                        <div className="home-width-container">

                            <div className="common-form-banner" >
                                <div style={{ width: "auto" }} >
                                    <img className="common-form-image" src={phone_form} />
                                </div>
                                <div style={{ padding: "20px 30px", color: "white" }} >
                                    <div>
                                        Introducing
                                    </div>
                                    <div style={{ fontSize: "40px", lineHeight: "normal" }}>
                                        Common Admission Form
                                    </div>
                                    <p>
                                        Fill one form, submit to several schools. Browse through several schools at one place.
                                        See there details like fees, admission procedure, images and much more.
                                    </p>
                                    <div>
                                        <Link to={{
                                            state: {
                                                search: "0"
                                            },
                                            pathname: "/schools-near-me"
                                        }}  >
                                            <button className="standard-button" style={{ backgroundColor: "#05F283" }} >
                                                TAKE ME THERE
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="about-content" >
                                <div className="about-text" >
                                    <div style={{ fontSize: "40px", marginBottom: "10px" }} >
                                        Features
                                    </div>
                                    <div className="help-teachers" style={{ display: "flex", justifyContent: "space-evenly" }} >

                                        <div className="about-card" >
                                            <h4>Browse Schools</h4>
                                            <div>
                                                <img src={browse} width="100%" style={{ borderRadius: "10px" }} />
                                            </div>
                                            <div>
                                                Search schools basis various filters & sort them basis name & school fee.
                                            </div>
                                        </div>

                                        <div className="about-card" >
                                            <h4>Fill Form Once</h4>
                                            <div>
                                                <img src={form} width="100%" style={{ borderRadius: "10px" }} />
                                            </div>
                                            <div>
                                                Save time fill only single admission form for all schools.
                                            </div>
                                        </div>

                                        <div className="about-card" >
                                            <h4>Save Time</h4>
                                            <div>
                                                <img src={clock} width="100%" style={{ borderRadius: "10px" }} />
                                            </div>
                                            <div>
                                                No travelling, no visiting to different schools. Submit documents online.
                                            </div>
                                        </div>

                                        <div className="about-card" >
                                            <h4>Get Information</h4>
                                            <div>
                                                <img src={app} width="100%" style={{ borderRadius: "10px" }} />
                                            </div>
                                            <div>
                                                Get all information regarding any school at one place. Admission dates, fees,
                                                procedure etc.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*<p>
                                <div style={{ fontSize: "40px", marginBottom: "10px" }}>
                                    About Us
                                </div>
                                <p>
                                    Here, you can find all types of tuitions and classes. Browse through several options and
                                    book a trial class for free. <br />
                                    It's that simple.
                                </p>
                            </p>
                            <div className="wrap" style={{ justifyContent: "space-around", flexWrap: "wrap" }} >
                                {
                                    top_cards.map(item => {
                                        return (
                                            <Link to={"pidgin/search/" + item.url} >
                                                <div className="home-top-card" >
                                                    <div className="home-top-card-image" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                                    </div>
                                                    <div style={{ textAlign: "center", fontSize: "13px", marginTop: "5px" }} >
                                                        {item.name}
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>

                            <div style={{ marginTop: "100px", marginBottom: "50px" }} >
                                <div style={{ fontSize: "40px", marginBottom: "10px" }} >
                                    Categories
                                </div>
                                <div>
                                    Explore amazing courses with visionary teachers around you
                                </div>
                                <div className="wrap wrap-responsive" style={{ justifyContent: "left", minHeight: "200px" }} >
                                    {
                                        this.state.categories &&
                                        this.state.categories.map(item => {
                                            return (
                                                <Link to={"pidgin/search/" + item.type} >
                                                    <div className="home-top-card"
                                                        style={{
                                                            height: "200px",
                                                            width: "180px",
                                                            backgroundImage: "url(" + item.image + ")",
                                                            backgroundSize: "cover",
                                                            margin: "10px",
                                                            border: "none"
                                                        }} >
                                                        <div style={{ fontSize: "18px", marginTop: "5px", color: "white", fontWeight: "300", backgroundImage: "linear-gradient(black, rgba(0,0,0,0))", borderRadius: "10px", padding: "10px 20px", margin: "-0.5px", }} >
                                                            {item.type}
                                                            <div style={{ fontSize: "13px", color: "white", marginTop: "-5px" }} >
                                                                See All
                                                </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>*/}

                            <div style={{ fontSize: "40px", marginBottom: "10px" }} >
                                Our Services For Teachers
                            </div>
                            <div className="wrap" id="community" style={{ flexWrap: "wrap"}} >
                                <div>
                                    If you conduct tuition classes then we are for you. We are about providing services 
                                    like accounts, management and IT for your tuition classes.
                                    <br/>
                                    Some of the services include:
                                </div>
                            </div>

                            <div className="wrap" id="community" style={{ flexWrap: "wrap", margin: "80px 0px" }} >
                                <div className="home-blogs-workshops" >
                                    <div style={{ fontSize: "40px", marginBottom: "10px" }} >
                                        Blogs
                                    </div>
                                    <Link to="/pidgin/blogs" >
                                        <div>
                                            <img src={blogs} className="home-blogs-workshops-image" alt="blogs" />
                                        </div>
                                    </Link>
                                </div>

                                <div className="home-blogs-workshops" >
                                    <div style={{ fontSize: "40px", marginBottom: "10px" }} >
                                        Workshops
                                    </div>
                                    <a href='/pidgin/workshops' >
                                        <div>
                                            <img src={webinar} className="home-blogs-workshops-image" alt="workshops" />
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="wrap" style={{ backgroundColor: "#fcfcfc", justifyContent: "center", marginBottom: "100px", flexWrap: "wrap" }} >
                        <div style={{ margin: "0px 20px" }} >
                            <img style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.5)", borderRadius: "25px" }} height="300px" src={phone} aly="app" />
                        </div>
                        <div>
                            <div>
                                You can apply to schools from the app as well.
                            </div>
                            <h1>Get the Pidgin App</h1>
                            <a href="https://play.google.com/store/apps/details?id=com.ds.pidgin" >
                                <div>
                                    <img src={play_store} width="200px" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;