import React from 'react'
import MappBar from './Components/mAppBar'
import MCategories from './Components/mCategories'
import MyListItem from './Components/MList'
import MyList from './Components/List'
import { FaSearch } from 'react-icons/fa'
import Categories from './Components/Categories'
import Footer from './Components/Footer'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="desktop" >
                    <div className="appBar">
                        <div>
                            <a href='/' ><img alt="logo" style={{ marginLeft: '50px', marginTop: '10px' }} src="./Images/app_bg.png" width="70px" /></a>
                        </div>
                        <div>
                            <a href="/pidgin/courses"><button class="sideBut">Courses</button></a>
                            <a href="/pidgin/about-us"><button class="sideBut">About Us</button></a>
                            <a href="/pidgin/contact-us"><button class="sideBut">Contact Us</button></a>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="container">
                            <div className="about">
                                <h2 style={{ letterSpacing: "2px", fontSize: "30px" }}>ABOUT US</h2>
                                <p>
                                    Text goes here.....
                                </p>
                                <Link>
                                    <div className="wrap">
                                        <div className="search">
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

                    <div className="wrap">
                        <div style={{ width: '1200px' }}>
                            <MyList />
                        </div>
                    </div>
                </div>

                <div className="mobile" >
                    <MappBar />
                    <div style={{ padding: '10px' }} >
                        <div className="search" style={{ width: '100%', marginTop: '20px' }}  >
                            <FaSearch style={{ marginRight: '10px' }} />
                        Search classes, courses, tuitions..
                        </div>
                    </div>
                    <MCategories />
                    <MyListItem />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}