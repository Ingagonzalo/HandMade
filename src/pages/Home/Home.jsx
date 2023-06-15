import React from 'react';

import Caracteristicas from '../../components/Caracteristicas/Caracteristicas';
import Colecciones from '../../components/Colecciones/Colecciones';
import './Home.css';
import Destacados from '../../components/Destacados/Destacados';
import AboutHome from '../../components/About-Home/About-Home';
import ContactoHome from '../../components/ContactoHome/ContactoHome';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <Caracteristicas />
      <Colecciones />
      <Destacados />
      <AboutHome />
      <ContactoHome />
    </div>
  );
};

export default Home;
