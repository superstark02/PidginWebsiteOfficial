import { Button, Divider } from '@material-ui/core'
import React, { Component } from 'react'

const classes = ["Nursery", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
const region = ["North West", "North East", "South East", "Sout West", "Any"]
const board = ["CBSE", "ICSE"]
const fees = ["Range-1", "Range-2", "Range-3", "Any"]

export class SchoolFilter extends Component {
    render() {
        return (
            <div className="desktop" >
                <div className="filter" >
                    <h4>Filters</h4>

                    <div className="filter-list-head" >
                        Class Applying For:
                            </div>
                    {
                        classes.map(item => {
                            return (
                                <div className='filter-list-item' onClick={() => { this.setAge(item) }} >
                                    {item}
                                </div>
                            )
                        })
                    }


                    <div className="filter-list-head" >
                        Region
                            </div>
                    {
                        region.map(item => {
                            return (
                                <div className='filter-list-item' onClick={() => { this.setPrice(item) }} >
                                    {item}
                                </div>
                            )
                        })
                    }

                    <div className="filter-list-head" >
                        Board
                    </div>

                    {
                        board.map(item => {
                            return (
                                <div className='filter-list-item' onClick={() => { this.setPrice(1000) }} >
                                    {item}
                                </div>
                            )
                        })
                    }
                    
                    <div className="filter-list-head" >
                        Fees
                    </div>

                    {
                        fees.map(item => {
                            return (
                                <div className='filter-list-item' onClick={() => { this.setPrice(1000) }} >
                                    {item}
                                </div>
                            )
                        })
                    }

                    <Button disableElevation variant="contained" color="secondary" style={{ fontSize: '10px', marginTop: '20px' }} onClick={this.clearFilter} >
                        Clear Filters
                    </Button>

                </div>
            </div>
        )
    }
}

export default SchoolFilter
