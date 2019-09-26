// import React, { Component } from 'react';

import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';




class AboutUs extends Component {
  render() {

    return (

      <div className = "aboutUsBackground">
    
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
              <p className="">Welcome to DataEngHub, a community for Data Engineers!</p>
            </div>
          </div>
          {/* Second Grid: Resent */}

        </div>
                
                <Jumbotron fluid className="jumbotron-position">
                <Container>
                </Container>
              </Jumbotron>

        </div>
      );
  }
}

export default AboutUs;



