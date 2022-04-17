import React, { Component } from 'react'

export default class FooterItem extends Component {
  render() {
    return (
      <li><a href="/" className="nav-link">{this.props.name}</a></li>
    )
  }
}


export class FooterIcon extends Component {
  render() {
    return (
      <li className="footer-social-item">
        <a href="/" className="footer-social-link">
          <i className={this.props.icon} />
        </a>
      </li>
    )
  }
}
