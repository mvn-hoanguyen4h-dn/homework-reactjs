import React from 'react'
import logo from '../../assets/images/logo-dark.png'

const Header = () => {
  return (
    <header className="page-header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="brand-image">
            <img src={logo} alt="brand-image" />
          </a>
          <div className="header-nav">
            <ul className="header-list">
              <li className="header-item">
                <a href="/">Home<i className="fa-solid fa-angle-down" /></a>
              </li>
              <li className="header-item">
                <a href="/">Pages<i className="fa-solid fa-angle-down" /></a>
              </li>
              <li className="header-item">
                <a href="/">Portfolios<i className="fa-solid fa-angle-down" /></a>
              </li>
              <li className="header-item">
                <a href="/">Blogs<i className="fa-solid fa-angle-down" /></a>
              </li>
              <li className="header-item">
                <a href="/">Contact<i className="fa-solid fa-angle-down" /></a>
              </li>
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

export default Header
