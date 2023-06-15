import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <div className='left-items'>
          <li>
            <a href='/'>Inicio</a>
          </li>
          <li>
            <a href='/products'>Productos</a>
          </li>
          <li>
            <a href='/collection'>Colecciones </a>
          </li>
          <li>
            <a href='/faq'>FAQ</a>
          </li>
        </div>
        <div className='right-items'>
          <li>
            <a href='/about-us'>Nosotros</a>
          </li>
          <li>
            <a href='/contact'>Contacto</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
