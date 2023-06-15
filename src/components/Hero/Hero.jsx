import React from 'react';
import './Hero.css';
import logoIcono from '../../assets/images/Logoicono.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroMain'>
        <div className='heroContent'>
          <div className='heroContentText'>
            <h1>Regalos de un valor sentimental incalculable</h1>
            <p>Te ayudamos a encontrar el regalo ideal para cada ocasión</p>
          </div>
          <div className='heroContentImage'>
            <img src={logoIcono} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
