import React from 'react';
import './ContactoHome.css';

const ContactoHome = () => {
  return (
    <div className='contactHome'>
      <h2>Contacto</h2>
      <div className='contactHomeList'>
        <div className='contactHomeItem'>
          <h4>WhatsApp</h4>
          <p>+546542132467</p>
        </div>
        <div className='contactHomeItem'>
          <h4>Horario de atención</h4>
          <p>Lunes a Viernes de 10:00 a 19:00</p>
        </div>
        <div className='contactHomeItem'>
          <h4>Instagram</h4>
          <p>@handmade.uruguay</p>
        </div>
      </div>
    </div>
  );
};

export default ContactoHome;
