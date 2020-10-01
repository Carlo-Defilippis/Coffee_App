import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { SiCoffeescript } from 'react-icons/si';


export default function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Never miss out on the best coffee deals again!
                </p>
                <p className='footer-subscription-text'>
                    Unsubscribe
                    </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe Here</Button>
                    </form>
                </div>
            </section>
            <div className='footer-link-items'>
                <h3> Contact Us </h3>
                <Link to='/'>Contact</Link>
                <Link to='/'>Locations</Link>
            </div>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    <SiCoffeescript className='navbar-icon' />
                    Coffee App
                </Link>
            </div>
            <small className='website-rights'><i class="fa fa-copyright" aria-hidden="true"></i>Coffee App 2020 </small>
        </div>
    )
}

// export default Footer; 
