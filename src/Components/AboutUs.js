import React from 'react'
import './about.css'
import Footer from './Footer';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className='main' style={{ backgroundColor: 'white' }} >
                    <div style={{ display: 'flex', margin: '30px' }} >
                        <div className="shadow" style={{ height: '600px', width: '500px', padding: '10px', backgroundColor: '#282e34' }} >
                            <h2 className='space' >ABOUT</h2>
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '30px', flexDirection: 'row-reverse', backgroundColor: 'transparent', marginTop: '-30%' }} >
                        <div className="shadow" style={{ height: '600px', width: '500px', padding: '10px', backgroundColor: '#00ff99' }} >
                            <h2 className='space' >MISSION</h2>
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '30px', backgroundColor: 'transparent', marginBottom: '-10%' }} >
                        <div className="shadow" style={{ height: '300px', width: '600px', padding: '10px', backgroundColor: '#00b6c7' }} >
                            <h2 className='space' >STUDENTS</h2>
                        </div>
                    </div>
                </div>
                <div className='second'>
                    <div style={{ display: 'flex', margin: '30px',flexDirection:'row-reverse' ,backgroundColor: 'transparent'}} >
                        <div className="shadow" style={{ height: '500px', width: '400px', padding: '10px', backgroundColor: '#f50057',marginTop:'-50px' }} >
                            <h2 className='space' >TEACHERS</h2>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}