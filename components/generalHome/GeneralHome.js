// import React, { Component } from 'react';

import React from 'react';



const GeneralHome = (props) => {
  return(
    <div className="w3-content" style={{'maxWidth':'1200px'}}>
      <div className="w3-panel">
        <i className="w3-xlarge fa fa-bars"></i>
      </div>
      {/* First Grid: Logo & About */}
      <div className="w3-row">
        <div className="w3-half w3-container">
          <h1 className="w3-xxlarge w3-text-light-grey">Hello</h1>
          <h1 className="w3-xxlarge w3-text-grey">We are</h1>
          <h1 className="w3-jumbo">DataEngHub</h1>
        </div>
        <div className="w3-half w3-container w3-xlarge w3-text-grey">
          <p className="">This is a place for Data Engineers to be part of the biggger community.</p>
        </div>
      </div>
      {/* Second Grid: Resent */}
      <div className="w3-panel w3-text-grey">
        <h4>Please SignUp to contribute Article or Script</h4>
      </div>
      <div className="w3-row">
        <div className="w3-half w3-container">
        </div>
        <div className="w3-half w3-container">

          <p className="w3-large w3-text-grey">Future Enhancements: Forums</p>
        </div>      
      </div>
    </div>
  );
}

export default GeneralHome;