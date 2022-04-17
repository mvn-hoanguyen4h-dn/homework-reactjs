import React, { Component } from 'react'

export default class HeaderItem extends Component {
  render() {
    const { item } = this.props
    return (
      <li className="header-item">
        <a href="/">{item}<i className="fa-solid fa-angle-down" /></a>
      </li>
    )
  }
}
