import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav >
      <ul className='contain'>
        <div className='left-items'>
          <li>
            <NavLink href='/'>Inicio</NavLink>
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
            <NavLink to='about'>Nosotros</NavLink> 
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
