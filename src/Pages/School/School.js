import React, { Component } from 'react'
import MyAppBar from '../../Components/AppBar'
import Footer from '../../Components/Footer'
import MappBar from '../../Components/mAppBar'
import SchoolList from '../../Components/School/SchoolList'
import SchoolFilter from './SchoolFilter'
import Tuitions from './Tuitions'

export class School extends Component {

    state = {
        search: ""
    }

    constructor(){
        super();
        if(this.props){
            this.setState({search:this.props.location.state.search});
        }
    }

    handleFilter = (e) => {
        this.setState({search:e});
    }

    render() {
        return (
            <div>
                <MyAppBar/>
                <div className="mobile" >
                    <MappBar/>
                </div>
                <div className="wrap" style={{alignItems:"flex-start",marginTop:"30px"}} >
                    <SchoolFilter setFilter={this.handleFilter} />
                    <SchoolList id={this.state.search} />
                    <Tuitions/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default School
