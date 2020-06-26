import React from 'react'
import logo from '../Images/app_bg.png'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import '../App.css'

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


export default function AppBar(props) {
    return (
        <div>
            <HideOnScroll {...props}>
                <div className='appBar' >
                    <div><img src={logo} width='50px' style={{ marginLeft: '70px',marginTop:'5px' }} alt='no' /></div>
                    <div style={{ marginRight: '40px' }} >
                        <a href='/pages/aboutUs.html'>
                            <button className='sideBut' >About Us</button></a>
                        <button className='sideBut' >Contact Us</button>
                    </div>
                </div>
            </HideOnScroll>
        </div>
    )
}


