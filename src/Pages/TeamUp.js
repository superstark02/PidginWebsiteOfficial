import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '../Components/AppBar';
import Footer from '../Components/Footer';

function exit() {
    window.Android.exit()
}

export default class EnrollmentForm extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
                <div style={{ marginTop: '100px', width: '100%', display: 'flex', justifyContent: 'space-around' }} >
                    <div style={{ width: '50%' }} >
                        <Typography style={{ fontSize: '12px', marginTop: '20px', color: 'grey', marginLeft: '15px', marginBottom: '-10px' }}>General</Typography>
                        <Divider variant="inset" />
                        <div style={{ padding: '20px 20px' }} >
                            <TextField id="outlined-search" required color="secondary" label="Name Of The Institution" type="search" variant="outlined"
                                style={{ width: '100%', marginBottom: '10px' }} />
                            <TextField id="outlined-search" required color="secondary" label="Type of classes. Ex. Music, Cooking etc." type="search" variant="outlined"
                                style={{ width: '100%', marginBottom: '10px' }} />
                        </div>

                        <Typography style={{ fontSize: '12px', marginTop: '20px', color: 'grey', marginLeft: '15px', marginBottom: '-10px' }}>About</Typography>
                        <Divider variant="inset" />
                        <div style={{ padding: '20px 20px' }} >
                            <TextField id="outlined-search" label="Phone Number" required color="secondary" type="search" variant="outlined"
                                style={{ width: '100%', marginBottom: '10px' }} />
                            <TextField
                                id="outlined-textarea"
                                label="Adress of the Institution."
                                placeholder="Adress of the Institution."
                                multiline
                                variant="outlined"
                                color="secondary"
                                required
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                        </div>
                        <div style={{ padding: '30px 30px', width: '100%',display:'flex',justifyContent:'space-around' }}>
                            <Button variant="outlined" color="secondary" style={{ width: '50%' }}>
                                SUBMIT
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}