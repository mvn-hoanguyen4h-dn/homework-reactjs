import React from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="footer-top">
          <div className="brand-image footer-img">
            <img src="https://finestdevs.com/demos/fastland-html/image/png/logo-dark.png" alt="brand-image" />
          </div>
          <ul className="footer-nav">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/" className="nav-link">About Us</a></li>
            <li><a href="/" className="nav-link">Blog</a></li>
            <li><a href="/" className="nav-link">Contacts</a></li>
          </ul>
        </div>
        <div className="footer-line" />
        <div className="footer-bottom">
          <p className="footer-copyright">© 2021 Fastland Web Ui Template</p>
          <ul className="footer-social-list">
            <li className="footer-social-item">
              <a href="/" className="footer-social-link">
                <FaFacebookF />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="/" className="footer-social-link">
                <FaTwitter />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="/" className="footer-social-link">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="/" className="footer-social-link">
                <i className="fa-brands fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
