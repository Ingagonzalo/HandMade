import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className='headerNavBar'>
        <p>¡Hacemos envíos a todo Uruguay!</p>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
