import React, { Component } from 'react';
import { AboutItemLeft, AboutItemRight } from '../../props/AboutItem';

class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container">
          <h6 className="section-description text-center">About Lupinus Group</h6>
          <h2 className="section-title about-title">Innovative Building With New Materials</h2>
          <div className="about-menu">
            <ul className="about-list">
              <AboutItemLeft
                title="Optimal Choice"
                desc="The White iphone smartphone mockup counterclockwise"
                icon="fa-solid fa-layer-group"
              />
              <AboutItemLeft
                title="Financial advice"
                desc="The White iphone smartphone mockup counterclockwise"
                icon="fa-solid fa-chart-pie"
              />
              <AboutItemLeft
                title="Innovative solutions"
                desc="The White iphone smartphone mockup counterclockwise"
                icon="fa-solid fa-gear"
              />
            </ul>
            <div className="about-center">
              <img src="https://finestdevs.com/demos/fastland-html/image/home-7/about-mobile-img.png" className="about-img" alt="about-phone" />
              <div className="about-circle">
                <img src="https://finestdevs.com/demos/fastland-html/image/home-7/green-shape.png" alt="about-circle" />
              </div>
            </div>
            <ul className="about-list">
              <AboutItemRight
                title="Optimal Choice"
                desc="The White iphone smartphone mockup counterclockwise"
                icon="fa-solid fa-bookmark"
              />
              <AboutItemRight
                title="Business strategy"
                desc="The White iphone smartphone mockup counterclockwise"
                icon="fa-solid fa-bell"
              />
              <AboutItemRight
                title="Marketing outline"
                desc="The White iphone smartphone mockup counterclockwise"
                icon="fa-solid fa-bell"
              />
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
