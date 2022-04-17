import React, { Component } from 'react'
import GroupItem from '../../props/GroupItem'

export default class Group extends Component {
  render() {
    return (
      <section className="group">
        <div className="container">
          <div className="group-menu">
            <div className="group-left">
              <h6 className="section-description">About Lupinus Group</h6>
              <h2 className="section-title group-title">Present your app in a beautiful and elegant way.</h2>
              <p>White iPhone Mockup Templates. A collection of three mockups showing
                an iPhone on a dark leather seat. High resolution PSD files, each coming
                with a smart object.</p>
              <div className="group-contents">
                <GroupItem
                  title="Minimal Design"
                  desc="Generate Lorem Ipsum place holder
                text for use in your Explore"
                />
                <GroupItem
                  title="Best Material"
                  desc="Generate Lorem Ipsum place holder
                text for use in your Explore"
                />
              </div>
            </div>
            <div className="group-right">
              <img src="https://finestdevs.com/demos/fastland-html/image/home-7/content-mobile-img.png" alt="group-phone" className="group-img" />
              <div className="group-circle">
                <img src="https://finestdevs.com/demos/fastland-html/image/home-7/red-shape.png" alt="group-circle" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
