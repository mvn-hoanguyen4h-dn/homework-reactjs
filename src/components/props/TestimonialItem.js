import React, { Component } from 'react'

export default class TestimonialItem extends Component {
  render() {
    const { src, name, year, desc } = this.props
    return (
      <li className="testimonial-item">
        <div className="testimonial-item-content">
          <div className="testimonial-item-top">
            <div className="testimonial-item-top-info">
              <img src={src} className="testimonial-item-img" alt="Avatar" />
              <div className="testimonial-item-description">
                <h6>{name}</h6>
                <p>{year}</p>
              </div>
            </div>
            <div className="testimonial-item-top-icon">
              <i className="fa fa-quote-left" />
            </div>
          </div>
          <p>{desc}</p>
        </div>
      </li>
    )
  }
}

export class TestimonialBtn extends Component {
  render() {
    return (
      <button className="testimonial-btn">
        <i className={this.props.icon} />
      </button>
    )
  }
}
