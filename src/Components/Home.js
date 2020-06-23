import React from 'react';
import '../App.css';
import Categories from './Categories';
import Footer from './Footer';
import { FaSearch } from 'react-icons/fa';
import AppBar from './AppBar';
import MyList from './List';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import MappBar from './mAppBar';
import MCategories from './mCategories'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MyListItem from './MList';
import ReactDOM from 'react-dom';

function Home() {
  return (
    <div className="App" >
      <div className="responsive" >
        <AppBar />
        <div class="pimg2" style={{ background: '#282e34', opacity: '1', display: 'flex', alignItems: 'center' }} >
          <div class="ptext" style={{ top: '20%', color: 'white', position: 'relative' }}>
            <div style={{ letterSpacing: '3px', textTransform: 'none', padding: '10px' }} >

              <h2>ABOUT US</h2>
              <div style={{ maxWidth: '100%', fontSize: '15px', letterSpacing: 'normal', margin: '0px 20%', marginBottom: '20px' }} >
                We are here to provide you the best experience of learning.
                It may be music, cooking or school examinations. We provide all the detials of the classes around you on your phone.
                Just browse through hundreds of classes, choose and get enrolled.
            </div>
              <div style={{ marginBottom: '10px', letterSpacing: 'normal' }} >Search Classes....</div>

              <Link to='/search' >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} >
                  <div className='search'>
                    <FaSearch style={{ marginRight: '10px' }} />Search music, cooking, subjects....
              </div>
                </div>
              </Link>

            </div>
          </div>

          <div className='para' style={{ width: '100%', display: 'flex', justifyContent: 'space-around', height: '600px', alignItems: 'center' }}>
            <div>
              <div className='paraText' > TOP CATEGORIES </div>
              <Categories />
            </div>
          </div>

        </div>

        <div class="section section-dark" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', minHeight: '100%' }} >
          <MyList />
        </div>

        <div class="pimg1">
          <div class="ptext">
            <span class="border">
              GET THE APP
          </span>
          </div>
        </div>
        <Footer />
      </div>
      <div className='mobile' >
        <MappBar />
        <div>
          <div style={{width:'100%',display:'flex',justifyContent:'space-around'}} >
            <div style={{ fontSize:'12px',width: '90%', backgroundColor: 'lightgrey', borderRadius: '5px', marginTop: '30px',padding:'5px',display:'flex',alignContent:'center' }} >
              <SearchRoundedIcon /> 
              <div style={{marginTop:'5px',marginLeft:'5px'}} >Search classes, tuitions, courses...</div>
            </div>
          </div>
          <MCategories />
          <MyListItem/>
        </div>
      </div>
    </div>
  );
}

export default Home;