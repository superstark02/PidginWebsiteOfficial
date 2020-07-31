import React from 'react'
import MappBar from './Components/mAppBar'
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

const top_cards = [
    {
        name: "Classes Near You",
        img: near,
        url:"near-you"
    },
    {
        name: "Online Classes",
        img: online,
        url:"online"
    },
    {
        name: "Classes Only For Women",
        img: women,
        url:"women"
    },
    {
        name: "Individual Classes",
        img: astro,
        url:"individual"
    },
    {
        name: "Unable To Find",
        img: find,
        url:"find"
    }
]

class Home extends React.Component {
    state = {
        categories: null,
        user:null,
        search:0,
    }

    componentDidMount() {

        getCollection("ImagesClassesTrending").then(snapshot => {
            this.setState({ categories: snapshot })
        })
        
        getUser().then(user=>{
            this.setState({user:user})
        })
    }

    handleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(user=>{
            this.setState({user:user.user.displayName})
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
                <div className="home-overlay " style={{ color: "white", textAlign: "center" }} >
                    <div style={{height:"28vh",display:"flex",justifyContent:"flex-end",width:"100%"}} >
                        <div style={{paddingRight:"15%",paddingTop:"30px"}} >
                            {
                                this.state.user === -1 || this.state.user === null ? (
                                    <Button onClick={this.handleLogin} style={{textTransform:"none",color:"white"}} >Sign In</Button>
                                ) : (
                                    <Link to="/pidgin/login" ><Button style={{textTransform:"none",color:"white"}} >{this.state.user}</Button></Link>
                                )
                            }
                        </div>
                    </div>
                    <div className="wrap" >
                        <div >
                            <div style={{ fontSize: "80px", fontFamily: "Friendly", marginBottom: "40px" }} >
                                Pidgin
                            </div>
                            <div style={{ fontSize: "40px", fontWeight: "100", letterSpacing: "1px" }} >
                                Delivering Education
                            </div>
                            <div className="wrap" >
                                <input 
                                    className="home-search-input" 
                                    onChange={(e)=>{this.setState({search:e.target.value})}}
                                    placeholder="Search classes, courses and more.." />
                                <div style={{ backgroundColor: "#04BF7B", height: '56px', width: "56px" }} className="wrap" >
                                    <IconButton onClick={()=>{this.props.history.push("/pidgin/search/"+this.state.search)}} >
                                        <SearchIcon style={{ color: "white" }} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-wallpaper" ></div>

                <div className="wrap" style={{ margin: "40px 0px" }} >
                    <div style={{ width: "70%" }} >
                        <div className="wrap" style={{ justifyContent: "space-around" }} >
                            {
                                top_cards.map(item => {
                                    return (
                                        <Link to={"pidgin/search/"+item.url} >
                                        <div className="home-top-card" >
                                            <div style={{ height: "160px", width: "200px", overflow: "hidden", backgroundImage: "url(" + item.img + ")", backgroundSize: "cover", borderRadius: "10px 10px 0px 0px" }}>
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

                        <div style={{ margin: "100px 0px" }} >
                            <div style={{ fontSize: "40px", marginBottom: "10px" }} >
                                Categories
                            </div>
                            <div>
                                Explore amazing courses with visionary teachers around you
                            </div>
                            <div className="wrap" style={{ flexWrap: "wrap", justifyContent: "left", minHeight: "500px" }} >
                                {
                                    this.state.categories &&
                                    this.state.categories.map(item => {
                                        return (
                                            <Link to={"pidgin/search/"+item.type} >
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
                        </div>
                    </div>
                </div>
                <div className="wrap" style={{backgroundColor:"#fcfcfc",height:"50vh"}} >
                        <div  >
                            <h1>Get the Pidgin App</h1>
                            <div>
                                Download From
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Home;