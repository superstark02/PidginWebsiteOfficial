import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      

      <div class="pimg2">
        <div class="ptext">
          <span className="border trans" style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
            SEARCH INPUT
        </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>ABOUT US</h2>
        <p>
          We are here to provide you the best experience of learning. 
          It may be music, cooking or school examinations. We provide all the detials of the classes around you on your phone.
          Just browse through hundreds of classes, choose and get enrolled.
        </p>
      </section>

      <div className="pimg3">
        <div className="ptext">
          <span className="border trans" style={{color:'black'}} >
            CATEGORIES HERE
      </span>
        </div>
      </div>

      <section class="section section-dark">
        <h2>LIST HERE</h2>
        <p>
          List Items.
        </p>
      </section>

      <div class="pimg1">
        <div class="ptext">
          <span class="border">
            GET THE APP
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
