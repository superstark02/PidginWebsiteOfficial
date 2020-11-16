import React, { Component } from 'react'
import getCollection from '../../Database/getCollection'
import '../../CSS/Components/Schools/SchoolList.css'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import form from '../../Images/School/form.jpg'
import list from '../../Images/School/list.jpg'


var filteredClass = null

export class SchoolList extends Component {

    state = {
        schools: null,
        search: "0",
    }

    componentDidMount() {
        if(this.props.id !== "0"){
            this.setState({search:this.props.id})
        }
        getCollection("Schools").then(snap => {
            this.setState({ schools: snap })
        })
    }

    render() {
        filteredClass = this.state.schools
        if (this.state.search !== "0" && this.state.schools !== null) {
            filteredClass = this.state.schools.filter(
                item =>
                    item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
            )
        }

        return (
            <div>
                <div style={{ display: "flex", margin: "20px", border: "solid 1px #e2e2e2", marginTop: "0px" }} >
                    <input style={{ width: "100%" }} value={this.state.search} className='search-search' placeholder='Search schools...' onChange={(e) => { this.setState({ search: e.target.value }) }} >
                    </input>
                    <div className='search-icon' style={{ color: 'white', display: "flex", justifyContent: 'center', alignItems: 'center', fontSize: "18px" }} >
                        <FaSearch />
                    </div>
                </div>

                <div className="image-container" style={{display:"flex"}} >
                    <div>
                        <Link to="/common_form" >
                            <img src={form} className="image-top" style={{borderRadius:"5px"}} />
                        </Link>
                    </div>
                    <div>
                        <Link to="/selected-schools">
                            <img src={list}  className="image-top"  style={{borderRadius:"5px"}} />
                        </Link>
                    </div>
                </div>

                
                <div className="wrap school-footer" style={{margin:"10px 0px"}} >
                    This is just a demo of the website. Please do not assume any information mentioned about the schools correct.
                </div>

                {
                    filteredClass !== null ? (
                        filteredClass.map(item => {
                            return (
                                <Link to={"/school/"+item.id} >
                                    <div className="school-item" >
                                        <div style={{ display: "flex" }} >
                                            <div className="logo-container wrap" >
                                                <img src={item.logo} className="list-logo"></img>
                                            </div>
                                            <div style={{ marginLeft: "20px",width:"100%" }} >
                                                <div style={{ fontSize: "20px", fontWeight: "800" }} >
                                                    {item.name}
                                                </div>
                                                <div>
                                                    {item.address}
                                                </div>
                                                <div style={{ backgroundColor: "rgba(0,0,0,0.2)", height: "0.5px", margin: "20px 0px" }} ></div>
                                                <div style={{display:"flex", justifyContent:"space-between"}}  >
                                                    <div>
                                                        ADMISSIONS:
                                                    </div>
                                                    <div style={{width:"50%"}} >
                                                        {
                                                            item.admission ? (
                                                                <div className="admission-open" >
                                                                    OPEN
                                                                </div>
                                                            ) : (
                                                                <div className="admission-closed" >
                                                                    CLOSED
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", justifyContent:"space-between"}} >
                                                    <div>
                                                        REGISTERATION FEES:
                                                    </div>
                                                    <div style={{width:"50%"}} >
                                                        &#8377;{item.fees}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    ) : (
                            <div className="wrap" >Please Wait</div>
                        )
                }
            </div>
        )
    }
}

export default SchoolList
