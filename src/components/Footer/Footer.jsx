import React from 'react';
import './Footer.css';
import {ReactComponent as LogoText} from '../../assets/branding/texto.svg';
import {ReactComponent as LogoHand} from '../../assets/branding/manos.svg';
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footerNavBar'>
      <div className='logoText' >
        <NavLink className='logo' to="/">
          <LogoText /> 
        </NavLink>
        <p> ®  HandMade Uruguay 2023</p>
      </div>
      <div className='footerText'>
        <NavLink  to="/">
        <p> <strong> Productos </strong>  </p>
        </NavLink>
        <NavLink  to="/">
        <p> Colecciones </p>
        </NavLink>
        <NavLink  to="/">
        <p> Gift cards</p>
        </NavLink>
      </div>
      <div className='footerText'>
        <NavLink  to="/">
        <p> <strong> Ayuda </strong>  </p>
        </NavLink>
        <NavLink  to="/">
        <p> Envios y Punto de retiro </p>
        </NavLink>
        <NavLink  to="/">
        <p> Formas de pago</p>
        </NavLink>
        <NavLink  to="/">
        <p> Sobre nosotros</p>
        </NavLink>
      </div>
      <div className='footerText crc'  >
        <p> +546542132467</p>
        <p> @handmade.uruguay</p>
        <LogoHand className='logoHand' to="/">
          <LogoText /> 
        </LogoHand>
      </div>
    </div>
  )
}
