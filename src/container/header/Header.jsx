import React from 'react';
import './header.css';
import DefaultLogoImage from '../../assets/logo/logo@3x.png'

const Header = () => {
    return(
        <div className="header">
            <img src={DefaultLogoImage} id="logoImage" alt="logo" />
        </div>
    )
}

export default Header;