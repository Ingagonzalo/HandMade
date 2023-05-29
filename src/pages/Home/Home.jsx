import React from 'react';
import imageHero from '../../assets/images/Hero.webp';
import logoIcono from '../../assets/images/Logoicono.svg';
import Caracteristicas from '../../components/Caracteristicas/Caracteristicas';
import Colecciones from '../../components/Colecciones/Colecciones';
import './Home.css';
import Destacados from '../../components/Destacados/Destacados';

const Home = () => {
  return (
    <div>
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
      <Caracteristicas />
      <Colecciones />
      <Destacados />
    </div>
  );
};

export default Home;
