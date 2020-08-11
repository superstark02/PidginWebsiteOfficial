import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import '../CSS/Home.css'
import { how_to_attempt_jee } from '../Constants/Blogs/How-To-Attempt-JEE'
import Footer from '../Components/Footer'

export class Blog extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <div className="wrap" >
                    <div className="home-width-container">
                        <div className="wrap">
                            <img alt="blog-image" src={how_to_attempt_jee.image} width="50%" />
                            <div style={{width:"50%"}} >
                                <h1>
                                    {how_to_attempt_jee.title}
                                </h1>
                            </div>
                        </div>
                        {how_to_attempt_jee.content}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Blog
