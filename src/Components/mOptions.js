import React from 'react'
import './mOptions.css'
import online from '../Images/online.jpg'
import women from '../Images/women.jpg'
import astro from '../Images/astronaut.jpg'
import find from '../Images/find.jpg'
import near from '../Images/near.jpg'

export default class Options extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="option-container" >

                    <a href='/pidgin/search' >
                        <div className="options-card" >
                            <div className="options-overlay" >
                                Classes Near You
                            </div>
                            <div>
                                <img alt="s" src={near} width="100%" ></img>
                            </div>
                        </div>
                    </a>

                    <div className="options-card" >
                        <div className="options-overlay" >
                            Online Classes
                        </div>
                        <div>
                            <img alt="s" src={online} width="100%" ></img>
                        </div>
                    </div>

                    <div className="options-card" >
                        <div className="options-overlay" >
                            Individual Classes
                        </div>
                        <div>
                            <img alt="s" src={astro} width="100%" ></img>
                        </div>
                    </div>

                    <div className="options-card" >
                        <div className="options-overlay" >
                            Classes Only For Women
                        </div>
                        <div>
                            <img alt="s" src={women} width="100%" ></img>
                        </div>
                    </div>

                    <div className="options-card" >
                        <div className="options-overlay" >
                            Unable To Find A Course?
                        </div>
                        <div>
                            <img alt="s" src={find} width="100%" ></img>
                        </div>
                    </div>


                </div>
            </React.Fragment>
        )
    }
}