import React from 'react';
import './About-Home.css';
import imageAboutHome from '../../assets/images/AboutHome.webp';

const AboutHome = () => {
  return (
    <div className='aboutHome'>
      <img src={imageAboutHome} alt='sobre nosotros' />
      <div className='aboutHomeText'>
        <h2>Sobre Hand Made</h2>
        <p>
          Somos una marca de accesorios artesanales que nació en Uruguay en
          Noviembre del 2020. Nos especializamos en la elaboración de pulseras y
          tobilleras en macramé con tarjetas personalizadas. También ofrecemos
          una amplia variedad de pulseras en otros materiales como acero
          quirúrgico y piedras preciosas.
        </p>
        <p>
          {' '}
          Nos enorgullece poder ofrecer productos de alta calidad y con diseños
          únicos y originales que no encontrarás en ningún otro lugar. Nos
          encanta experimentar con nuevos materiales y técnicas para poder
          ofrecerte lo mejor de lo mejor. Además, recientemente hemos
          incorporado una sección de accesorios en plata 925, con anillos y
          cadenas que complementan perfectamente nuestras pulseras y tobilleras.
        </p>
        <p>
          Nos apasiona nuestro trabajo y ponemos todo nuestro esfuerzo y
          dedicación en cada pieza que creamos. Esperamos que te guste nuestro
          trabajo tanto como a nosotros nos encanta hacerlo. ¡Gracias por elegir
          Hand Made!
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
