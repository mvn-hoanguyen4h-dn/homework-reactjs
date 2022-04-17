import React, { Component } from 'react'

export default class PricingItem extends Component {
  render() {
    const { title, desc, currency, price, item1, item2, item3, item4, classBtn } = this.props
    return (
      <li className="pricing-item">
        <div className="pricing-item-content">
          <div className="pricing-top">
            <div className="pricing-info">
              <h4 className="pricing-title">{title}</h4>
              <div className="pricing-description">{desc}</div>
            </div>
            <div className="pricing-line" />
            <div className="pricing-info">
              <span className="pricing-currency">{currency}</span>
              <span className="pricing-price">{price}</span>
              <span className="pricing-month">/Month</span>
            </div>
          </div>
          <div className="pricing-content">
            <ul className="pricing-content-list">
              <PricingIcon text={item1} />
              <PricingIcon text={item2} />
              <PricingIcon text={item3} />
              <PricingIcon text={item4} />
            </ul>
            <a href="/" className={classBtn}>choose plan</a>
          </div>
        </div>
      </li>
    )
  }
}



class PricingIcon extends Component {
  render() {
    return (
      <li className="pricing-content-item">
        <i className="fa-solid fa-check" />
        {this.props.text}
      </li>
    )
  }
}

