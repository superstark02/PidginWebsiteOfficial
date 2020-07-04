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
import Options from './Components/mOptions'
import TopPicks from './Components/TopPicks'
import MyAppBar from './Components/AppBar'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="desktop" >
                    <MyAppBar/>
                    
                    <div className="wrap">
                        <div className="container">
                            <div className="about">
                                <h2 style={{ letterSpacing: "2px", fontSize: "30px" }}>PIDGIN</h2>
                                <p>
                                    We have put all the courses, tuition and <br /> other hobby classes on this website.
                                </p>
                                <p>
                                    Browse through hundreds of courses and <br /> find the right one for you and low cost.
                                </p>
                                <p>
                                    Filter the search results results according to your needs.
                                </p>
                                <p>
                                    Get a trial class for free.
                                </p>

                                <Link to={{
                                    pathname:"/pidgin/search",
                                    state:{
                                        name:null,
                                        type:null
                                    }
                                }} >
                                    <div className="wrap" style={{height:'40%'}} >
                                        <div className="search-home">
                                            Search classes, courses, subjects..
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div style={{ width: '600px', height: '500px', display: 'flex', justifyContent: 'space-around', alignItems: "center" }}
                                className="categories">
                                <Categories />
                            </div>
                        </div>
                    </div>

                    <div className="wrap" >
                        <div className="home-container" >

                            <Link to={{
                                pathname:'/pidgin/search',
                                state:{
                                    online:true,
                                    name:"Online Classes available :"
                                }
                            }} >    
                            <div className="flip-box" >
                                <div className="flip-box-inner" >
                                    <div className="flip-box-front" >
                                        <div className="home-overlay" >
                                            Online Classes
                                        </div>
                                        <img alt="s" src={online} height="250px" />
                                    </div>
                                    <div className="flip-box-back" >
                                        <h2>Online</h2>
                                        Browse through hundreds of institutes which
                                        provides online as well as offline classes.
                                    </div>
                                </div>
                            </div>
                            </Link>

                            <Link to={{
                                pathname:'/pidgin/search',
                                state:{
                                    women:true,
                                    name:"Classes For Women Only:"
                                }
                            }} >
                            <div className="flip-box" >
                                <div className="flip-box-inner" >
                                    <div className="flip-box-front" >
                                        <div className="home-overlay" >
                                            Classes Only For Women
                                        </div>
                                        <img alt="s" src={women} height="250px" />
                                    </div>
                                    <div className="flip-box-back" >
                                        <h2>Only For Women</h2>
                                        Find classes which are only for women.
                                        Institutes

                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                            <Link to={{
                                pathname:'/pidgin/search',
                                state:{
                                    individual:true,
                                    name:"Individual Classes and Courses :"
                                }
                            }} >
                            <div className="flip-box" >
                                <div className="flip-box-inner" >
                                    <div className="flip-box-front" >
                                        <div className="home-overlay" >
                                            Individual Classes
                                        </div>
                                        <img alt="s" src={astro} height="250px" />
                                    </div>
                                    <div className="flip-box-back" >
                                        <h2>Individual Classes</h2>
                                        Move with your own pace and comfort.
                                        No two students are alike. Find home tutors, individual classes
                                        and learn your way.
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                            <Link to="/find-my-class" >
                            <div className="flip-box" >
                                <div className="flip-box-inner" >
                                    <div className="flip-box-front" >
                                        <div className="home-overlay" >
                                            Unable to find?
                                        </div>
                                        <img alt="s" src={find} height="250px" />
                                    </div>
                                    <div className="flip-box-back" >
                                        <h2>Unable to find?</h2>
                                        Unable to find the class you need?
                                        Tell us. We may arrange it for you.
                                    </div>
                                </div>
                            </div>
                            </Link>

                        </div>
                    </div>

                    <TopPicks/>

                    <div className="wrap">
                        <div style={{ width: '1200px', paddingBottom: '200px' }}>
                            <MyList />
                        </div>
                    </div>
                </div>

                <div className="mobile" >
                    <MappBar />
                    <div style={{ padding: '10px' }} >
                        <Link to="/pidgin/search" >
                            <div className="search" style={{ width: '100%', marginTop: '20px' }}  >
                                <FaSearch style={{ marginRight: '10px' }} />
                            Search classes, courses, tuitions..
                            </div>
                        </Link>
                    </div>
                    <MCategories />
                    <Options />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}