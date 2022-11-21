import React from 'react'
import ProductCard from './ProductCard'
import './ProductsDisplay.css'
function ProductsDisplay() {
  return (
    <div className='productsDisplay'>
      <div><ProductCard></ProductCard></div>
      <div><ProductCard></ProductCard></div>
      <div><ProductCard></ProductCard></div>
      <div><ProductCard></ProductCard></div>
      <div><ProductCard></ProductCard></div>
      <div><ProductCard></ProductCard></div>
    </div>
  )
}

export default ProductsDisplay