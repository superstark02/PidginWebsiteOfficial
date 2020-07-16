import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import MappBar from '../Components/mAppBar'
import TextField from '@material-ui/core/TextField';
import './form.css'

class Form extends Component {
    render() {
        return (
            <div>
                <div className='desktop' style={{paddingTop:"100px"}} >
                    <MyAppBar/>
                </div>
                <div className='mobile' >
                    <MappBar/>
                </div>
                <div className='wrap' >
                    <h2>{this.props.match.params.id}</h2>
                </div>
                <div className='wrap'>
                    <div className="form-container" >
                        <div className='text-box' >
                            <TextField id="outlined-basic" label="Name" variant="outlined" disabled style={{width:"100%"}} />
                        </div>
                        <div className='text-box' >
                            <TextField id="outlined-basic" label="Type" variant="outlined" style={{width:"100%"}} disabled />
                        </div>
                        <div className='text-box' >
                            <TextField id="outlined-multiline-static" label="Address" variant="outlined" style={{width:"100%"}} disabled />
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
