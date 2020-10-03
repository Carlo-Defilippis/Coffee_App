import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'yellow'];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : COLOR[0]
    return (
        <Link to='/signup' className='btn-link'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
        </Link>
    )
}

export default Button;