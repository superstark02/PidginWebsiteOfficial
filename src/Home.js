import React from 'react'
import MappBar from './Components/mAppBar'
import MCategories from './Components/mCategories'
import MyList from './Components/List'
import { FaSearch } from 'react-icons/fa'
import Categories from './Components/Categories'
import Footer from './Components/Footer'
import { Link } from 'react-router-dom'
import online from './Images/online.jpg'
import women from './Images/women.jpg'
import astro from './Images/astronaut.jpg'
import find from './Images/find.jpg'
import near from './Images/near.jpg'
import Options from './Components/mOptions'
import TopPicks from './Components/TopPicks'
import './CSS/Home.css'
import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const top_cards = [
    {
        name: "Classes Near You",
        img: near
    },
    {
        name: "Online Classes",
        img: online
    },
    {
        name: "Classes Only For Women",
        img: women
    },
    {
        name: "Individual Classes",
        img: astro
    },
    {
        name: "Unable To Find",
        img: find
    }
]

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="home-overlay wrap" style={{ color: "white", textAlign: "center" }} >
                    <div>
                        <div style={{ fontSize: "80px", fontFamily: "Friendly", marginBottom: "50px" }} >
                            Pidgin
                        </div>
                        <div style={{ fontSize: "40px", fontWeight: "100", letterSpacing: "1px" }} >
                            Delivering Education
                        </div>
                        <div className="wrap" >
                            <input className="home-search-input" placeholder="Search classes, courses and more.." ></input>
                            <div style={{ backgroundColor: "#04BF7B", height: '56px', width: "56px" }} className="wrap" >
                                <IconButton>
                                    <SearchIcon style={{ color: "white" }} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-wallpaper" ></div>

                <div className="wrap" style={{ margin: "40px" }} >
                    <div style={{ width: "70%" }} >
                        <div className="wrap" style={{justifyContent:"space-around"}} >
                            {
                                top_cards.map(item => {
                                    return (
                                        <div className="home-top-card" >
                                            <div style={{ height: "160px", width: "200px", overflow: "hidden", backgroundImage: "url(" + item.img + ")", backgroundSize: "cover", borderRadius: "10px 10px 0px 0px" }}>
                                            </div>
                                            <div style={{ textAlign: "center", fontSize: "13px", marginTop: "5px" }} >
                                                {item.name}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div style={{margin:"100px 0px"}} >
                            <div style={{fontSize:"40px",marginBottom:"10px"}} >
                                Categories
                            </div>
                            <div>
                                Explore amazing courses with visionary teachers around you  
                            </div>
                            
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home;