import React from 'react'
import imagenes from "../../pages/ColeccionesPage/ColeccionesPageImagenes.js";
import './ProductosItems.css'


const ProductosItems = () => {
   const blocks = [
     { imageSrc: imagenes[13].img, word: 'Anillos' },
     { imageSrc: imagenes[14].img, word: 'Colgante' },
     { imageSrc: imagenes[15].img, word: 'Dedicatorias' },
     { imageSrc: imagenes[15].img, word: 'Caravanas' },
   ];
 
   return (
     <div className="blocks-container">
       {blocks.map((block, index) => (
         <Block key={index} imageSrc={block.imageSrc} word={block.word} />
       ))}
     </div>
   );
 };

const Block = ({ imageSrc, word }) => {

  return (
    <div className='ProductsItemsContainer'>
        <div className="block">
      <img src={imageSrc} alt="Imagen" />
      <p>{word}</p>
      </div>
    </div>
  )
}


 

export default ProductosItems