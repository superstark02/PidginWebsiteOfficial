import { Button, Divider } from '@material-ui/core'
import React, { Component } from 'react'

export class SchoolFilter extends Component {
    render() {
        return (
            <div>
                <div className="filter" >
                    <h4>Filters</h4>

                    <div className="filter-list-head" >
                        Age
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setAge(5) }} >
                        Below 5 years
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setAge(10) }} >
                        Below 10 years
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setAge(13) }} >
                        Below 13 years
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setAge(16) }} >
                        Below 16 years
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setAge(20) }} >
                        Below 20 years
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setAge(100) }} >
                        Any
                            </div>


                    <div className="filter-list-head" >
                        Price
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setPrice(1000) }} >
                        From &#8377;1000
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setPrice(2000) }} >
                        From &#8377;2000
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setPrice(3000) }} >
                        From &#8377;3000
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setPrice(4000) }} >
                        From &#8377;4000
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setPrice(5000) }} >
                        From &#8377;5000
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setPrice(6000) }} >
                        From &#8377;6000
                            </div>
                    <div className="filter-list-item" onClick={() => { this.setPrice(7000) }} >
                        From &#8377;7000
                            </div>
                    <div className="filter-list-item" onClick={() => { this.setPrice(10000000) }} >
                        Any
                            </div>

                    <div className="filter-list-head" >
                        Type
                            </div>

                    <div className="sub-title-list" >
                        Hobby
                            </div>
                    <Divider />
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "music" }) }} >
                        Music
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "cooking" }) }} >
                        Cooking
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "dance" }) }} >
                        Dance
                            </div>

                    <div className="sub-title-list" >
                        Science
                            </div>
                    <Divider />
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "science" }) }} >
                        Science
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "maths" }) }} >
                        Maths
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "physics" }) }} >
                        Physics
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "chemistry" }) }} >
                        Chemistry
                            </div>

                    <div className="sub-title-list" >
                        Courses
                            </div>
                    <Divider />
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "painting" }) }} >
                        Painting
                            </div>
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "sketching" }) }} >
                        Sketching
                            </div>

                    <div className="sub-title-list" >
                        Language
                            </div>
                    <Divider />
                    <div className='filter-list-item' onClick={() => { this.setState({ type: "japenese" }) }} >
                        Japenese
                            </div>

                    <Button disableElevation variant="contained" color="secondary" style={{ fontSize: '10px', marginTop: '20px' }} onClick={this.clearFilter} >
                        Clear Filters
                    </Button>

                </div>
            </div>
        )
    }
}

export default SchoolFilter
