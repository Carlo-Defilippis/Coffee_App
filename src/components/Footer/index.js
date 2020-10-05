import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import { SiCoffeescript } from 'react-icons/si';
function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <small className='website-rights'>Coffee App © 2020</small>
            </div>
            <Link to='/' className='social-logo'>
              <SiCoffeescript className='navbar-icon' />
              
            </Link>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;