import React from 'react'
import Footer from '../Components/Home/Footer'
import Header from '../Components/Home/Header'
import ProductsDisplay from '../Components/Products/ProductsDisplay'
import ProductsSection from '../Components/Products/ProductsSection'

function Product() {
  return (
    <div>
        <Header></Header>
        <ProductsSection></ProductsSection>
        <ProductsDisplay></ProductsDisplay>
        <Footer></Footer>
    </div>
  )
}

export default Product