import React from 'react';
import './EndImage.css';

const EndImage = () => {
  return (

    <div className="container top-set mb-5">
      <div className="row">
        <div className="col-xl-8 m-auto col-lg-8 text-center col-md-12 col-sm-12 col-xs-12">
         
            <img
              src={process.env.PUBLIC_URL + '/MMH_logo.png'}
              alt="Logo"
              className="center-logo text-center"

            />
            <p className="lorem-text mt-4">Capture a house photo and see it transform into 8+ themes instantly. Join our satisfied  <br />
              customers and revamp your space today!</p>
              <span class="lorem-text2">info@magicmyhouse.com | Chamber of Commerce: 08214009</span> <br></br>

             
          
        </div>
      </div>
    </div>



  );
};

export default EndImage;