import React from 'react'
import './categories.css'
import image from '../Images/footer.jpg'
import { FaInstagram, FaWhatsapp, FaFacebook} from 'react-icons/fa';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <div class='footer' >
                <div style={{display:'flex',justifyContent:'space-evenly'}} >
                    <div>
                        <div className='footerHeading' >
                            Pidgin
                        </div>
                        <div style={{fontSize:'50px',color:'black'}} >
                            <a href='https://www.instagram.com/pidgin2020/' ><FaInstagram style={{margin:'10px'}} color='black' /></a>
                            <a href='https://wa.me/919910197196' ><FaWhatsapp style={{margin:'10px'}} color='black' /></a>
                            <a href='https://www.facebook.com/Pidgin-104215741310224/' ><FaFacebook color='black' style={{margin:'10px'}} /></a>
                        </div>
                    </div>
                    <div style={{display:'flex'}} >
                        <div style={{textAlign:'left'}} >
                            <div class='footerHeading' style={{margin:'0'}} >Team Up</div>
                            <div>Increase your market.</div>
                            <div>Reach to potential learners.</div>
                            <div>Showcase your awards and merits.</div>
                            <Link to='/classesAdd' >
                                <Button color='secondary' variant='outlined' style={{marginTop:'30px'}} >TEAM UP</Button>
                            </Link>
                        </div>
                        <div>
                            <img alt='s' width='400px' src={image}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}