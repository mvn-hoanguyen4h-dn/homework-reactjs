import React, { Component } from 'react';

class MainApp extends Component {
  render() {
    return (
      <section className="app">
        <div className="container">
          <h2 className="section-title">App Is Available For Free On Google Play &amp; App Store</h2>
          <p>We’ll help you achieve your marketing &amp; business goals</p>
          <div className="app-btns">
            <a href="/" className="app-link btn btn-second">
              <i className="fa-brands fa-apple" />
              App Store
            </a>
            <a href="/" className="app-link btn btn-primary">
              <i className="fa-brands fa-google-play" />
              Google Play
            </a>
          </div>
        </div></section>
    );
  }
}

export default MainApp;
