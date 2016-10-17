import React, { Component } from 'react';

class socialNetworks extends Component {
  render() {
    return (
      <div className="socialNetworks">
       <a className="Facebook" href="https://www.facebook.com/l.j.jakubauskas" target="_blank"><i className="fa fa-facebook fa-5x" title="Facebook"></i></a>
       <a className="LinkedIn" href="https://www.linkedin.com/in/lukasjakubauskas" target="_blank"><i className="fa fa-linkedin fa-inverse fa-5x" title="LinkedIn"></i></a>
       <a className="Twitter" href="https://twitter.com/LukasJokubas" target="_blank"><i className="fa fa-twitter fa-5x" title="Twitter"></i></a>
       <a className="Google" href="https://plus.google.com/+LukasJakubauskas" target="_blank"><i className="fa fa-google-plus fa-5x" title="Google+"></i></a>
      </div>
    );
  }
}

export default socialNetworks;