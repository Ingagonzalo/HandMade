import React from 'react';
import './Destacados.css';
import imagenArticulo from '../../assets/images/Article.webp';

const Destacados = () => {
  return (
    <div>
      <h2>Productos Destacados</h2>
      <div className='productsList'>
        <article>
          <img src={imagenArticulo} alt='' />
          <p>Pulsera de Hilo Acerado</p>
        </article>

        <article>
          <img src={imagenArticulo} alt='' />
          <p>Pulsera de Hilo Acerado</p>
        </article>
        <article>
          <img src={imagenArticulo} alt='' />
          <p>Pulsera de Hilo Acerado</p>
        </article>
        <article>
          <img src={imagenArticulo} alt='' />
          <p>Pulsera de Hilo Acerado</p>
        </article>
      </div>
    </div>
  );
};

export default Destacados;
