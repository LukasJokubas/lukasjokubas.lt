import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="loader-container circle-pulse-multiple">
          <div className="loader">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
          </div>
        </div>
        <main role="main">
          <h1>Shh... <span className="title">LukasJokubas.lt</span> grows in silence.</h1>
        </main>
        <div className="share-buttons">
          <span className="st_sharethis_large" data-displayText="ShareThis"></span>
          <span className="st_googleplus_large" data-displayText="Google +"></span>
          <span className="st_facebook_large" data-displayText="Facebook"></span>
          <span className="st_twitter_large" data-displayText="Tweet"></span>
          <span className="st_linkedin_large" data-displayText="LinkedIn"></span>
          <span className="st_pinterest_large" data-displayText="Pinterest"></span>
        </div>
      </div>
    );
  }
}

export default App;
