import React, { Component } from 'react'

export default class ServiceItem extends Component {
  render() {
    const { icon, title, desc } = this.props
    return (
      <li className="service-item">
        <div className="service-item-content">
          <div className="service-icon">
            <i className={icon} />
          </div>
          <h3 className="content-title">{title}</h3>
          <p>{desc}</p>
        </div>
      </li>
    )
  }
}
