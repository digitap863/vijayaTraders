import {React,useEffect, useState} from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import './ProductsDisplay.css'

function ProductsDisplay() {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    axios.get('/api/admin/viewAllProduct').then(res=>{
      setProducts(res.data)
    })
  },[])
  
  return (
    <div className='productsDisplay'>
      {products.map((item)=>{
        return <div><ProductCard description={item.Description} name={item.Name} image={item.image}></ProductCard></div>
      })}
    </div>
  )
}

export default ProductsDisplay