import React from 'react'
import './search.css'
import Footer from '../Components/Footer'
import MappBar from '../Components/mAppBar'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import { FaGlobe, FaFemale, FaUserAstronaut } from 'react-icons/fa'
import SearchView from './mSearch'
import { Button } from '@material-ui/core'
import MyAppBar from '../Components/AppBar'
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

var filteredClass = null
var age = null
var fees = null
var type = null

export default class Search extends React.Component {
    state = {
        type: null,
        classes: null,
        minPrice: null,
        minAge: null,
        features: null,
        search: null,
        online: null,
        women: null,
        individual: null
    }

    componentDidMount() {
        var type = this.props.location.state.type
        this.setState({ type: type })

        this.clearFilter()

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

        if (this.props.location.state.search != null) {
            this.setState({ search: this.props.location.state.search })
        }
    }

    clearFilter = () => {
        this.setState({ minPrice: 10000000 })
        this.setState({ minAge: 100 })
        this.setState({ type: null })
    }

    setAge = (age) => {
        this.setState({ minAge: age })
    }

    setPrice = (price) => {
        this.setState({ minPrice: price })
    }

    render() {
        age = null
        fees = null
        type = null
        filteredClass = this.state.classes
        if (this.props.location.state.name !== null && this.state.classes !== null) {
            filteredClass = this.state.classes.filter(
                item =>
                    item.women === this.props.location.state.women ||
                    item.individual === this.props.location.state.individual ||
                    item.online === this.props.location.state.online
            )
        }

        if (this.props.location.state.name === null && this.state.classes !== null) {
            if (this.state.type === null) {
                filteredClass = this.state.classes.filter(
                    item =>
                        item.fees < this.state.minPrice &&
                        item.age < this.state.minAge
                )
            }

            if (this.state.type !== null) {
                filteredClass = this.state.classes.filter(
                    item =>
                        item.fees < this.state.minPrice &&
                        item.age < this.state.minAge &&
                        item.type.toLowerCase().indexOf(this.state.type.toLowerCase()) !== -1
                )
            }
        }

        if(this.state.minAge!==100){
            age = <Chip 
                label = {this.state.minAge+"+ years"}
                color = "secondary"
                icon = {<DoneIcon/>}
                size = "small"
                variant = "outlined"
                style = {{marginTop:'-5px',marginBottom:'5px'}}
                onDelete = {()=>{this.setState({minAge:100})}}
            />
        }

        if(this.state.minPrice!==10000000){
            fees = <Chip 
                label = {this.state.minPrice}
                color = "secondary"
                icon = {<DoneIcon/>}
                size = "small"
                variant = "outlined"
                style = {{marginTop:'-5px',marginBottom:'5px'}}
                onDelete = {()=>{this.setState({minPrice:10000000})}}
            />
        }

        if(this.state.type!==null){
            type = <Chip 
            label = {this.state.type}
            color = "secondary"
            icon = {<DoneIcon/>}
            size = "small"
            variant = "outlined"
            style = {{marginTop:'-5px',marginBottom:'5px'}}
            onDelete = {()=>{this.setState({type:null})}}
        />
        }

        return (
            <div style={{ backgroundColor: '#f3f3f3' }} >
                <div className="desktop">
                    <MyAppBar />
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
                                    <FaGlobe /> Online
                            </div>
                                <div className='filter-list-item' >
                                    <FaFemale /> Only For Women
                            </div>
                                <div className='filter-list-item' >
                                    <FaUserAstronaut /> Individual Classes
                            </div>

                                <div className="filter-list-head" >
                                    Age
                            </div>
                                {age}
                                <div className='filter-list-item' onClick={() => { this.setAge(5) }} >
                                    5+ years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(10) }} >
                                    10+ years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(13) }} >
                                    13+ years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(16) }} >
                                    16+ years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(20) }} >
                                    20+ years
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setAge(100) }} >
                                    Any
                            </div>


                                <div className="filter-list-head" >
                                    Price
                            </div>
                                {fees}
                                <div className='filter-list-item' onClick={() => { this.setPrice(1000) }} >
                                    &#8377;1000 +
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(2000) }} >
                                    &#8377;2000 +
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(3000) }} >
                                    &#8377;3000 +
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(4000) }} >
                                    &#8377;4000 +
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(5000) }} >
                                    &#8377;5000 +
                            </div>
                                <div className='filter-list-item' onClick={() => { this.setPrice(6000) }} >
                                    &#8377;6000 +
                            </div>
                                <div className="filter-list-item" onClick={() => { this.setPrice(7000) }} >
                                    &#8377;7000 +
                            </div>
                                <div className="filter-list-item" onClick={() => { this.setPrice(10000000) }} >
                                    Any
                            </div>

                                <div className="filter-list-head" >
                                    Type
                            </div>
                                {type}
                                <div className='filter-list-item' onClick={()=>{this.setState({type:"music"})}} >
                                    Music
                            </div>
                                <div className='filter-list-item' onClick={()=>{this.setState({type:"cooking"})}} >
                                    Cooking
                            </div>

                                <Button disableElevation variant="contained" color="secondary" style={{ fontSize: '10px', marginTop: '20px' }} onClick={this.clearFilter} >
                                    Clear Filters
                            </Button>

                            </div>
                            <div>
                                <h1>{this.props.location.state.name}</h1>
                                <div className="search-list" >
                                    {
                                        filteredClass &&
                                        filteredClass.map(item => {
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
                    <MappBar />
                    <SearchView />
                </div>
                <Footer />
            </div >
        )
    }
}