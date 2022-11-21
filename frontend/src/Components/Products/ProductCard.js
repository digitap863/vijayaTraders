import React from 'react'
import './ProductCard.css'
function ProductCard() {
  return (
    <div className='cardMain'>
      <div className='cardLayer'>
      <div className='cardContent'>
        <h1>Title</h1>
        <p>Description</p>
        <p>Price</p>
      </div>
      </div>
    </div>
  )
}

export default ProductCard