import React, { Component } from 'react'

export class AboutItemLeft extends Component {
  render() {
    return (
      <li className="about-item about-item--left">
        <div className="about-content">
          <h3 className="content-title">{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </div>
        <div className="about-icon">
          <i className={this.props.icon} />
        </div>
      </li>
    )
  }
}

export class AboutItemRight extends Component {
  render() {
    const { icon, title, desc } = this.props
    return (
      <li className="about-item about-item--right">
        <div className="about-icon">
          <i className={icon} />
        </div>
        <div className="about-content">
          <h3 className="content-title">{title}</h3>
          <p>{desc}</p>
        </div>
      </li>
    )
  }
}

