import React, { Component } from 'react';
import ServiceItem from '../../props/ServiceItem';

class Service extends Component {
  render() {
    return (
      <section className="service">
        <div className="container">
          <h6 className="section-description text-center">Our Services</h6>
          <h2 className="section-title text-center">Provided Features</h2>
          <ul className="service-list">
            <ServiceItem
              icon="fa-solid fa-bell"
              title="Team Accounts"
              desc="There are many variations and
              passages of Lorem lpsum
              available for use"
            />
            <ServiceItem
              icon="fa-solid fa-layer-group"
              title="Digital Agency"
              desc="There are many variations and
              passages of Lorem lpsum
              available for use"
            />
            <ServiceItem
              icon="fa-solid fa-envelope"
              title="Email Marketing"
              desc="There are many variations and
              passages of Lorem lpsum
              available for use"
            />
            <ServiceItem
              icon="fa-solid fa-chart-pie"
              title="API Reference"
              desc="There are many variations and
              passages of Lorem lpsum
              available for use"
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Service;
