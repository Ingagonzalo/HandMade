import React from 'react';
import Delivery from '../../assets/images/DeliveryIcono.svg';
import Tienda from '../../assets/images/TiendaIcono.svg';
import Whatsapp from '../../assets/images/WhatsappIcono.svg';
import './Caracteristicas.css';

const Caracteristicas = () => {
  return (
    <div>
      <div className='caracteristics'>
        <div>
          <img src={Whatsapp} alt='' />
          <p>Hacé tu pedido por WhatsApp.</p>
        </div>
        <div>
          <img src={Delivery} alt='' />
          <p>Recibilo en casa. Hacemos envíos a todo el país.</p>
        </div>
        <div>
          <img src={Tienda} alt='' />
          <p>También podés retirarlo en la tienda de Montevideo.</p>
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
