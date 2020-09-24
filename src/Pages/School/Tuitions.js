import React, { Component } from 'react'
import getCollection from '../../Database/getCollection'

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
            <div>
                <div style={{ width: "250px", minHeight: "200px" }} >
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
                </div>
            </div>
        )
    }
}

export default Tuitions
