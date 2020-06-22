import React from 'react'
import './about.css'
import AppBar from './AppBar'
import Footer from './Footer';

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='responsive' >
                    <AppBar/>
                    <div style={{marginTop:'100px'}} >
                        <h2 className='space' >ABOUT US</h2>
                        <div>
                            <h3>We are a company which is busy delivering education to you.
                            
                                There are times when:
                            </h3>
                            <ul>
                                <li>You are not able to find a particular class.</li>
                                <li>You are not satisfied by the institution</li>
                                <li>Classes rates are high</li>
                                <li>Options are low.</li>
                            </ul>
                            <h3>We being entreprenuers have solved this problem :</h3>
                            <ul>
                                <li>We have put all the classes around you on your phone.</li>
                                <li>Now you can browse through millions, OK NOT MILLION, but thousands of online/offline classes</li>
                                <li>Classes are brought to you through a quality check.</li>
                                <li>Rates are defenitely low (we worked hard for this one).</li>
                                <li>Find the course and class you desire by applying filters, like age, fees, timings.</li>
                            </ul>
                            <h3>How do we improve user experience?</h3>
                            <ul>
                                <li>We supply all services required to build an amazing institute. Like furniture, website, business management etc. So that teacher only focus on teaching</li>
                                <li>We keep a check in order of the institute through monthly checks and visits.</li>
                                <li>Also, if you are unable to find any class on Pidgin. Reach Us we might arrange that class for you.</li>
                            </ul>
                            <h3>Some Keywords to search for:</h3>
                            <p>
                                music classes, dance classes, classes near me, french class, maths classes, tuitions near me, home tutors, cooking classes, coding classes, cheap classes, art classes, tuitions near me, classes for women.
                            </p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}