import React, { Component } from 'react';
import PricingItem from '../../props/PricingItem';

class Pricing extends Component {
  render() {
    return (
      <section className="pricing">
        <div className="container">
          <h6 className="section-description text-center">Pricing table</h6>
          <h2 className="section-title text-center">Live Chat 24/7 Support</h2>
          <div className="pricing-time">
            <span>Monthly</span>
            <span><input type="radio" /></span>
            <span>Yearly</span>
            <span className="pricing-discount">SAVE 20%</span>
          </div>
          <ul className="pricing-list">
            <PricingItem
              title="Development"
              desc="Yearly package"
              currency="$"
              price="25"
              classBtn="btn btn-primary"
              item1="Unlimited updates &amp; projects"
              item2="Custom permissions"
              item3="Custom instructors"
              item4="Custom designs &amp; features"
            />
            <PricingItem
              title="Optimize &amp; Seo"
              desc="Yearly package"
              currency="$"
              price="55"
              classBtn="btn btn-second"
              item1="Unlimited updates &amp; projects"
              item2="Custom permissions"
              item3="Custom instructors"
              item4="Custom designs &amp; features"
            />
            <PricingItem
              title="Designing"
              desc="Yearly package"
              currency="$"
              price="70"
              classBtn="btn btn-primary"
              item1="Unlimited updates &amp; projects"
              item2="Custom permissions"
              item3="Custom instructors"
              item4="Custom designs &amp; features"
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Pricing;
