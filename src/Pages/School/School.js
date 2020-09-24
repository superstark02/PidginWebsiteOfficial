import React, { Component } from 'react'
import MyAppBar from '../../Components/AppBar'
import Footer from '../../Components/Footer'
import MappBar from '../../Components/mAppBar'
import SchoolList from '../../Components/School/SchoolList'
import SchoolFilter from './SchoolFilter'
import Tuitions from './Tuitions'

export class School extends Component {
    render() {
        return (
            <div>
                <MyAppBar/>
                <div className="mobile" >
                    <MappBar/>
                </div>
                <div className="wrap" style={{alignItems:"flex-start"}} >
                    <SchoolFilter/>
                    <SchoolList/>
                    <Tuitions/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default School
