import React, { Component } from 'react'
import getCollection from '../../Database/getCollection'
import store from '../../Images/store.png'
import pidgin from '../../Images/app_bg.png'

export class Tuitions extends Component {
    state = {
        top_picks:null
    }
    componentDidMount(){
        getCollection("ImagesClassesTopPicks").then(snap=>{
            this.setState({top_picks:snap})
        })
    }
    render() {
        return (
            <div className="desktop" >
                <div  style={{ width: "250px", minHeight: "200px",backgroundColor: 'white', padding: "10px", textAlign:"center"  }}  >
                    <h2>
                        Download Pidgin App NOW
                    </h2>
                    <a href="https://play.google.com/store/apps/details?id=com.ds.pidgin" >
                        <div>
                            <img src={pidgin} width="100%" />
                        </div>
                        <div>
                            <img src={store} width="100%" />
                        </div>
                    </a>
                </div>
                {/*<div style={{ width: "250px", minHeight: "200px" }} >
                    <div style={{ backgroundColor: 'white', padding: "10px" }} >
                        <h2>Tuitions</h2>
                    </div>
                    {
                        this.state.top_picks &&
                        this.state.top_picks.map(item => {
                            return (
                                <a href={'/class/' + item.id} >
                                    <div style={{ display: "flex", backgroundColor: "white" }} >
                                        <div>
                                            <img src={item.image} height="100px" alt={item.name} ></img>
                                        </div>
                                        <div style={{ padding: "10px 5px" }} >
                                            <div>
                                                <b>{item.name}</b>
                                            </div>
                                            <div>
                                                {item.type}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>*/}
            </div>
        )
    }
}

export default Tuitions
