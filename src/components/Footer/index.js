import React from "react";
import "./style.css";
import Button from "../Button"
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { SiCoffeescript } from 'react-icons/si';

function Footer() {
  return (
    <div className='footer-container'>
     
      <section className='social-media'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <SiCoffeescript className='navbar-icon' />
              Coffee App
            </Link>
          </div>

      </section>
      <small className='website-rights'>Coffee App © 2020</small>
    </div>
  );
}

export default Footer;

