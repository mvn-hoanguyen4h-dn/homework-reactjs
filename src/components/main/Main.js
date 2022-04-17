import React, { Component } from 'react'
import About from './sections/About'
import Community from './sections/Community'
import Group from './sections/Group'
import MainApp from './sections/MainApp'
import MainStarting from './sections/MainStarting'
import Pricing from './sections/Pricing'
import Service from './sections/Service'
import Testimonial from './sections/Testimonial'

export default class Main extends Component {
  render() {
    return (
      <main className="page-main">
        <MainStarting />
        <Service />
        <About />
        <hr />
        <Group />
        <hr />
        <Pricing />
        <hr />
        <Testimonial />
        <Community />
        <MainApp />
      </main>
    )
  }
}


