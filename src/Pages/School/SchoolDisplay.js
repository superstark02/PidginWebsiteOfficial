import React, { Component } from 'react'
import MyAppBar from '../../Components/AppBar'
import Footer from '../../Components/Footer'
import MappBar from '../../Components/mAppBar'
import '../../CSS/Pages/Schools/SchoolDisplay.css'
import getDoc from '../../Database/getDoc'
import getSubCollection from '../../Database/getSubCollection'

export class SchoolDisplay extends Component {

    state = {
        school: null,
        school_images: null
    }

    componentDidMount() {
        getDoc("Schools", this.props.match.params.id).then(snap => {
            this.setState({ school: snap })
        })
        getSubCollection("Schools", this.props.match.params.id, "Images").then(snap => {
            this.setState({ school_images: snap })
        })
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <div className="mobile" >
                    <MappBar />
                </div>
                {
                    this.state.school !== null ? (
                        <div>
                            <div className="images-container" >
                                {
                                    this.state.school_images&&
                                    this.state.school_images.map(item => {
                                        return (
                                            item.images.map(image => {
                                                return (
                                                    <img height="100%" src={image} />
                                                )
                                            })
                                        )
                                    })
                                }
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}} >
                                <div></div>
                                <div>
                                    <button className="standard-button" >
                                        Show All Images
                                    </button>
                                </div>
                            </div>

                            <div className="wrap" >
                                <div className="school-display-container" >
                                    
                                </div>
                            </div>

                        </div>
                    ) : (
                            <div className="wrap" >Please Wait</div>
                        )
                }
                <Footer />
            </div>
        )
    }
}

export default SchoolDisplay
