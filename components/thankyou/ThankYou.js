// import React, { Component } from 'react';

import React from 'react';


const ThankYou = (props) => {
  return(
    <div className="w3-content" style={{'max-width':'1200px'}}>
      <div className="w3-panel">
        <i className="w3-xlarge fa fa-bars"></i>
      </div>
      {/* First Grid: Logo & About */}
      <div className="w3-row">
        <div className="w3-half w3-container">
          <h1 className="w3-xxlarge w3-text-light-grey">Hello</h1>
        </div>
        <div className="w3-half w3-container w3-xlarge w3-text-grey">
            <br></br><br></br>
          <p className="">Thank you for Signing up.</p>
        </div>
      </div>
      {/* Second Grid: Resent */}
      <div className="w3-panel w3-text-grey">
      </div>
      <div className="w3-row">
    
      </div>
    </div>
  );
}

export default ThankYou;