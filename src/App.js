import React from 'react';
import './App.css';
import logo from './Images/app_bg.png'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import Categories from './Components/Categories';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer';
import { FaSearch } from 'react-icons/fa';

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

function App(props) {
  return (
    <Router>
    <div className="App">
      <HideOnScroll {...props}>
      <div className='appBar' >
          <div><img src={logo} width='50px' style={{marginLeft:'70px'}} alt='no'/></div>
          <div style={{marginRight:'40px'}} >
            <button className='sideBut' >About Us</button>
            <button className='sideBut' >Contact Us</button>
          </div>
      </div>
      </HideOnScroll>

      <div class="pimg2" style={{background:'#282e34',opacity:'1',display:'flex',alignItems:'center'}} >
        <div class="ptext" style={{top:'20%',color:'white',position:'relative'}}>
          <div style={{letterSpacing:'3px',textTransform:'none',padding:'10px'}} >

            <h2>ABOUT US</h2>
            <div style={{maxWidth:'100%',fontSize:'15px',letterSpacing:'normal',margin:'0px 20%',marginBottom:'20px'}} >
              We are here to provide you the best experience of learning. 
              It may be music, cooking or school examinations. We provide all the detials of the classes around you on your phone.
              Just browse through hundreds of classes, choose and get enrolled.
            </div>
            <div style={{marginBottom:'10px',letterSpacing:'normal'}} >Search Classes....</div>

            <div style={{width:'100%',display:'flex',justifyContent:'space-around'}} >
              <div className='search'>
                <FaSearch style={{marginRight:'10px'}} />Search music, cooking, subjects....
              </div>
            </div>

          </div>
        </div>

        <div className='para' style={{width:'100%',display:'flex',justifyContent:'space-around',height:'600px',alignItems:'center'}}>
          <div>
            <div className='paraText' > TOP CATEGORIES </div>
            <Categories/>
          </div>
        </div>

      </div>

      <div class="section section-dark" style={{backgroundColor:'white'}} >
        
      </div>

      <div class="pimg1">
        <div class="ptext">
          <span class="border">
            GET THE APP
          </span>
        </div>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
