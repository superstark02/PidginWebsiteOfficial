import React, { Component } from 'react'
import getCollection from '../../Database/getCollection'
import '../../CSS/Components/Schools/SchoolList.css'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import form from '../../Images/School/form.jpg'
import list from '../../Images/School/list.jpg'

export class SchoolList extends Component {

    state = {
        schools: null
    }

    componentDidMount() {
        getCollection("Schools").then(snap => {
            this.setState({ schools: snap })
        })
    }

    render() {
        return (
            <div>
                <div style={{ display: "flex", margin: "20px", border: "solid 1px #e2e2e2", marginTop: "0px" }} >
                    <input style={{ width: "100%" }} className='search-search' placeholder='Search schools...' onChange={(e) => { this.setState({ search: e.target.value }) }} >
                    </input>
                    <div className='search-icon' style={{ color: 'white', display: "flex", justifyContent: 'center', alignItems: 'center', fontSize: "18px" }} >
                        <FaSearch />
                    </div>
                </div>

                <div className="image-container" style={{display:"flex"}} >
                    <div>
                        <Link to="/form/dummy" >
                            <img src={form} className="image-top" style={{borderRadius:"5px"}} />
                        </Link>
                    </div>
                    <div>
                        <Link to="/selected-schools">
                            <img src={list}  className="image-top"  style={{borderRadius:"5px"}} />
                        </Link>
                    </div>
                </div>

                {
                    this.state.schools !== null ? (
                        this.state.schools.map(item => {
                            return (
                                <Link to={"/school/"+item.id} >
                                    <div className="school-item" >
                                        <div style={{ display: "flex" }} >
                                            <div className="logo-container wrap" >
                                                <img src={item.logo} className="list-logo"></img>
                                            </div>
                                            <div style={{ marginLeft: "20px" }} >
                                                <div style={{ fontSize: "20px", fontWeight: "800" }} >
                                                    {item.name}
                                                </div>
                                                <div>
                                                    {item.address}
                                                </div>
                                                <div style={{ backgroundColor: "rgba(0,0,0,0.2)", height: "0.5px", margin: "20px 0px" }} ></div>
                                                <div>
                                                    ADMISSIONS:
                                            </div>
                                                <div>
                                                    REGISTERATION FEES:
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    ) : (
                            <div>Please Wait</div>
                        )
                }
            </div>
        )
    }
}

export default SchoolList
