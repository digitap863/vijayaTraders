import React from 'react'
import './ProductCard.css'
function ProductCard(props) {

  return (
    <div className='cardMain'>
      <img src={props.image} alt="" />
      <div className='cardLayer'>
      <div className='cardContent'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>Price</p>
      </div>
      </div>
    </div>
  )
}

export default ProductCard