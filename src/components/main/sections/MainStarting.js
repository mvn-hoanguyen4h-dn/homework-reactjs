import React, { Component } from 'react';

class MainStarting extends Component {
  render() {
    return (
      <section className="starting">
        <div className="container">
          <div className="starting-content">
            <div className="starting-left">
              <h6 className="section-description">Get Started</h6>
              <h1 className="starting-title">Your fitness advisor
                AIl in one place</h1>
              <p>When, while lovely valley teems with vapour around meand
                meridian sun strikes the upper impenetroble.</p>
              <div className="starting-btns">
                <a href="/" className="btn btn-second starting-btn">watch video</a>
                <a href="/" className="btn btn-primary starting-btn">get started</a>
              </div>
            </div>
            <div className="starting-right">
              <div className="starting-img"><img src="https://finestdevs.com/demos/fastland-html/image/home-7/hero-l8-1.png" alt="starting-phone-1" /></div>
              <div className="starting-img"><img src="https://finestdevs.com/demos/fastland-html/image/home-7/hero-l8-2.png" alt="starting-phone-2" /></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainStarting;
