import React from 'react'
import { ImFacebook, ImLinkedin2, ImTwitter } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { FOOTER_INFO, STORE_NAME } from 'utils/static'
import './Footer.scss'

function Footer() {
  const { contact, services, linksSocial, link_services } = FOOTER_INFO
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer__header">
            <div className="footer__header-logo">{STORE_NAME}</div>
            <div className="footer__header-contact">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Email or phone number" />
              <button>Send</button>
            </div>
          </div>
          <hr />
          <div className="footer__body">
            <div className="footer__body-side">
              <img className="footer__body-side-img" src={require('assets/images/footer-book.png').default} alt="" />
            </div>
            <div className="footer__body-side">
              <h5 className="footer__body-side-title">Contact</h5>
              {contact.map((text, index) => {
                return (
                  <p className="footer__body-side-text" key={index}>
                    {text}
                  </p>
                )
              })}
            </div>
            <div className="footer__body-side">
              <h5 className="footer__body-side-title">Services</h5>
              {services.map((text, index) => {
                return (
                  <p className="footer__body-side-text" key={index}>
                    <Link to={link_services[index]}>{text}</Link>
                  </p>
                )
              })}
            </div>
          </div>
          <hr />
          <div className="footer__icons">
            <a className="footer__icon" href={linksSocial.facebook} target="blank">
              <ImFacebook />
            </a>
            <a className="footer__icon" href={linksSocial.twitter} target="blank">
              <ImTwitter />
            </a>
            <a className="footer__icon" href={linksSocial.linkedin} target="blank">
              <ImLinkedin2 />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
