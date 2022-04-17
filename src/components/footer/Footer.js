import React, { Component } from 'react'
import BrandImage from '../props/BrandImage'
import FooterItem, { FooterIcon } from '../props/FooterItem'
// import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default class Footer extends Component {
  render() {

    return (
      <footer className="page-footer">
        <div className="container">
          <div className="footer-top">
            <BrandImage
              src="https://finestdevs.com/demos/fastland-html/image/png/logo-dark.png"
            />
            <ul className="footer-nav">
              <FooterItem
                name="Home"
              />
              <FooterItem
                name="About Us"
              />
              <FooterItem
                name="Blog"
              />
              <FooterItem
                name="Contacts"
              />
            </ul>
          </div>
          <div className="footer-line" />
          <div className="footer-bottom">
            <p className="footer-copyright">© 2021 Fastland Web Ui Template</p>
            <ul className="footer-social-list">
              <FooterIcon
                icon="fa-brands fa-facebook"
              />
              <FooterIcon
                icon="fa-brands fa-twitter"
              />
              <FooterIcon
                icon="fa-brands fa-instagram"
              />
              <FooterIcon
                icon="fa-brands fa-linkedin"
              />
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

