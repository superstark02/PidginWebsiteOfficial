import React from 'react'
import './categories.css'
import image from '../Images/footer.jpg'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Button } from '@material-ui/core';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="desktop" >
                    <div class='footer' >
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
                            <div>
                                <div className='footerHeading' >
                                    Pidgin
                                </div>
                                <div style={{ fontSize: '50px', color: 'black' }} >
                                    <a href='https://www.instagram.com/pidgin2020/' ><FaInstagram style={{ margin: '10px' }} color='black' /></a>
                                    <a href='https://wa.me/919910197196' ><FaWhatsapp style={{ margin: '10px' }} color='black' /></a>
                                    <a href='https://www.facebook.com/Pidgin-104215741310224/' ><FaFacebook color='black' style={{ margin: '10px' }} /></a>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }} >
                                <div style={{ textAlign: 'left' }} >
                                    <div class='footerHeading' style={{ margin: '0' }} >Team Up</div>
                                    <div>Increase your market.</div>
                                    <div>Reach href potential learners.</div>
                                    <div>Showcase your awards and merits.</div>
                                    <a href='/classesAdd' >
                                        <Button color='secondary' variant='outlined' style={{ marginTop: '30px' }} >TEAM UP</Button>
                                    </a>
                                </div>
                                <div>
                                    <img alt='s' width='400px' src={image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile" >
                    <div className="footer" >
                        <div className="footerHeading" >
                            Pidgin
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center' }}  >
                            <div>
                                <img alt="s" src={image} width="100%" ></img>
                            </div>
                            <div>
                                <a href='/classesAdd' >
                                    <Button color='secondary' variant='outlined' style={{ marginTop: '30px' }} >TEAM UP</Button>
                                </a>
                            </div>
                        </div>
                        <div style={{ fontSize: '50px', color: 'black',textAlign:'center',marginTop:'20px' }} >
                            <a href='https://www.instagram.com/pidgin2020/' ><FaInstagram style={{ margin: '10px' }} color='black' /></a>
                            <a href='https://wa.me/919910197196' ><FaWhatsapp style={{ margin: '10px' }} color='black' /></a>
                            <a href='https://www.facebook.com/Pidgin-104215741310224/' ><FaFacebook color='black' style={{ margin: '10px' }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}