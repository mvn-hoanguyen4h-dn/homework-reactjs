import React, { Component } from 'react'
import logo from '../../assets/images/logo-dark.png'
import BrandImage from '../props/BrandImage'
import HeaderItem from '../props/HeaderItem'

export default class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <div className="container">
          <div className="header-content">
            <BrandImage />
            <div className="header-nav">
              <ul className="header-list">
                <HeaderItem item="Home" />
                <HeaderItem item="Pages" />
                <HeaderItem item="Porfolios" />
                <HeaderItem item="Blogs" />
                <HeaderItem item="Contact" />
              </ul>
              <div className="header-btn">
                <a href="/" className="btn btn-primary"> Free SEO Analysis</a>
              </div>
              <div className="header-bars">
                <i className="fa-solid fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
