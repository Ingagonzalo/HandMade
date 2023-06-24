import React from 'react'
import ProductosItems from '../../components/ProductosItems/ProductosItems'
import Hero from '../../components/Hero/Hero'
import Destacados from '../../components/Destacados/Destacados'



const ProductsPage = () => {
  return (
    <div>
      <Hero></Hero>
      <h2>Productos</h2>
        <ProductosItems></ProductosItems>
        <Destacados/>
    </div>
  )
}

export default ProductsPage