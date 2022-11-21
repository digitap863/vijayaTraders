import React from 'react'
import GalleryDisplay from '../Components/Gallery/GalleryDisplay'
import GallerySection from '../Components/Gallery/GallerySection'
import Footer from '../Components/Home/Footer'
import Header from '../Components/Home/Header'

function Gallery() {
  return (
    <div>
        <Header></Header>
        <GallerySection></GallerySection>
        <GalleryDisplay></GalleryDisplay>
        <Footer></Footer>
    </div>
  )
}

export default Gallery