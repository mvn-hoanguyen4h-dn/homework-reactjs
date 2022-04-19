import React, { Component } from 'react';
import Countdown from '../Countdown';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className="container">
          <Countdown count="50" />
          <Countdown count="40" />
          <Countdown count="30" />
        </div>
      </div>
    );
  }
}

export default Home;
