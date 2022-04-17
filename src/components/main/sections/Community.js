import React, { Component } from 'react';

class Community extends Component {
  render() {
    return (
      <section className="community">
        <div className="container">
          <div className="community-content">
            <div className="community-img">
              <img src="https://finestdevs.com/demos/fastland-html/image/home-7/promo-l8-img.png" alt="person" />
            </div>
            <div className="community-info">
              <h6 className="community-description">Join our community</h6>
              <h2 className="section-title community-title">Get latest app updates right at your inbox</h2>
              <form className="community-form">
                <input type="email" placeholder="Enter your email" />
                <button className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Community;
