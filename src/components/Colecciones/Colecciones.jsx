import React from 'react';
import './Colecciones.css';

const Colecciones = () => {
  return (
    <div>
      <div className='collection'>
        <h2>Colecciones</h2>
        <div className='collectionList'>
          <div className='collectionItem'>
            <h3>Parejas</h3>
          </div>
          <div className='collectionItem'>
            <h3>Amistad</h3>
          </div>
          <div className='collectionItem'>
            <h3>Familia</h3>
          </div>
          <div className='collectionItem'>
            <h3>Para vos</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colecciones;
