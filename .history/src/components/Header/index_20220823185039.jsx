import React from 'react';
import './Header.css';

const Header = ({ setLoggedIn}) => {
  return (
    <nav className='Header'>
        <div>
            <img alt=""/>
        </div>
        <ul className='Menu-Container'>
            <li>Inicio</li>
        </ul>
    </nav>
  )
}

export default Header;
