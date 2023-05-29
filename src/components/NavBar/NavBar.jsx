import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <div className='left-items'>
          <li>
            <a href=''>Inicio</a>
          </li>
          <li>
            <a href=''>Productos</a>
          </li>
          <li>
            <a href=''>Colecciones </a>
          </li>
          <li>
            <a href=''>FAQ</a>
          </li>
        </div>
        <div className='right-items'>
          <li>
            <a href=''>Nosotros</a>
          </li>
          <li>
            <a href=''>Contacto</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
