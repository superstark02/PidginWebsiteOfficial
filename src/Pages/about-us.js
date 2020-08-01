import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import wallpaper from '../Images/about-page-wallpaper.png'
import '../CSS/Home.css'
import '../CSS/Pages/About.css'

export class About extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div>
                    <div className="about-wallpaper-overlay wrap" >
                        <div>
                            <div style={{ fontWeight: "100", letterSpacing: '2px' }} >
                                OUR MISSION
                            </div>
                            <div className="future-of-learning" >
                                Building The Future Of Learning
                            </div>
                        </div>
                    </div>
                    <div className="about-wallpaper" ></div>
                </div>
            </div>
        )
    }
}

export default About
