import React from 'react'
import './search.css'
import Footer from '../Components/Footer'
import MappBar from '../Components/mAppBar'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import { FaUser, FaGlobe, FaFemale, FaUserAstronaut, FaUsers } from 'react-icons/fa'

export default class Search extends React.Component {
    state = {
        type: null,
        classes: null,
    }

    componentDidMount() {
        const data = db.collection('Classes');
        data.get()
            .then(snapshot => {
                const classes = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    classes.push(data)
                })
                this.setState({ classes: classes })
            })
        if (this.props.location.type != null) {
            this.setState({ search: this.props.location.type })
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: '#f3f3f3' }} >
                <div className="desktop" >
                    <div className="appBar">
                        <div>
                            <a href='/' ><img alt="logo" style={{ marginLeft: '50px', marginTop: '10px' }} src="../Images/app_bg.png" width="70px" /></a>
                        </div>
                        <div>
                            <a href="/pidgin/courses"><button className="sideBut">Courses</button></a>
                            <a href="/pidgin/about-us"><button className="sideBut">About Us</button></a>
                            <a href="/pidgin/contact-us"><button className="sideBut">Contact Us</button></a>
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', paddingBottom: '100px', flexDirection: 'column', alignItems: 'center' }}>
                        <input className='search-search' placeholder='Search classes, tuition, courses...' >
                        </input>
                        <div className="body" >
                            <div className="filter" >
                                <h4>Filters</h4>

                                <div className="filter-list-head" >
                                    Features
                            </div>
                                <div className='filter-list-item' >
                                    <FaUser /> Offline
                            </div>
                                <div className='filter-list-item' >
                                    <FaGlobe /> Online
                            </div>
                                <div className='filter-list-item' >
                                    <FaFemale /> Only For Women
                            </div>
                                <div className='filter-list-item' >
                                    <FaUserAstronaut /> Individual Classes
                            </div>
                                <div className='filter-list-item' >
                                    <FaUsers /> Group Classes
                            </div>

                                <div className="filter-list-head" >
                                    Age
                            </div>
                                <div className='filter-list-item' >
                                    5+ years
                            </div>
                                <div className='filter-list-item' >
                                    10+ years
                            </div>
                                <div className='filter-list-item' >
                                    13+ years
                            </div>
                                <div className='filter-list-item' >
                                    16+ years
                            </div>
                                <div className='filter-list-item' >
                                    20+ years
                            </div>
                                <div className='filter-list-item' >
                                    Any
                            </div>


                                <div className="filter-list-head" >
                                    Price
                            </div>
                                <div className='filter-list-item' >
                                    &#8377;1000 +
                            </div>
                                <div className='filter-list-item' >
                                    &#8377;2000 +
                            </div>
                                <div className='filter-list-item' >
                                    &#8377;3000 +
                            </div>
                                <div className='filter-list-item' >
                                    &#8377;4000 +
                            </div>
                                <div className='filter-list-item' >
                                    &#8377;5000 +
                            </div>
                                <div className='filter-list-item' >
                                    &#8377;6000 +
                            </div>
                                <div className="filter-list-item" >
                                    &#8377;7000 +
                            </div>
                                <div className="filter-list-item" >
                                    Any
                            </div>

                                <div className="filter-list-head" >
                                    Type
                            </div>
                                <div className='filter-list-item' >
                                    Music
                            </div>
                                <div className='filter-list-item' >
                                    Cooking
                            </div>

                            </div>
                            <div>
                                <div className="search-list" >
                                    {
                                        this.state.classes &&
                                        this.state.classes.map(item => {
                                            return (
                                                <Link to={'/class/' + item.id} >
                                                    <div className="card-search" >
                                                        <div style={{ overflowY: 'hidden', overflowX: 'hidden', width: '150px', maxHeight: '200px' }} >
                                                            {
                                                                item.i1 ? (
                                                                    <img alt="s" src={item.i1} width="150px" />
                                                                ) : (
                                                                        <img alt="s" src={item.i2} width="150px" />
                                                                    )
                                                            }
                                                        </div>
                                                        <div className="details" >
                                                            <div>
                                                                <h4 style={{ marginBottom: '0px' }} >{item.name}</h4>
                                                                <div className="search-type" >
                                                                    {item.type} | Age: {item.age}+
                                                </div>
                                                            </div>

                                                            <div className="search-fees" >
                                                                Starting fees: {item.fees}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile" >
                    <MappBar/>
                    <Footer />
                </div>
            </div >
        )
    }
}