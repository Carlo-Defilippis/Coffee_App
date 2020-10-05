import React, { useState, useEffect } from 'react';
import Button from '../Button/index'
import { Link } from 'react-router-dom';
import './style.css';
import { SiCoffeescript } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';
import Owner from '../Owner'
import { IconContext } from 'react-icons/lib';
import { Signup } from '../../App';

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <SiCoffeescript className='navbar-icon' />
                    Coffee App
                </Link>
                        <div className="menu-icon" onClick={handleClick} >
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Menu' className='nav-links' onClick={closeMobileMenu}>
                                    Menu
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/location' className='nav-links' onClick={closeMobileMenu}>
                                    location
                            </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/register' className="btn-link">
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'
                                            onClick={closeMobileMenu}>
                                            Sign Up
                               </Button>
                                    </Link>
                                ) : (
                                        <Link to='/register' className='btn-link'>
                                            <Button buttonStyle='btn--outline'
                                                buttonSize='btn--mobile'>
                                                Sign Up
                               </Button>
                                        </Link>
                                    )}
                            </li>
                            <li className="nav-item">
                               <Owner />
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
