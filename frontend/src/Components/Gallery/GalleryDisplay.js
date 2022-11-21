import React from 'react'
import GalleryCard from './GalleryCard'
import './GalleryDisplay.css'
function GalleryDisplay() {
  return (
    <div className='galleryDisplay'>
      <div><GalleryCard></GalleryCard></div>
      <div><GalleryCard></GalleryCard></div>
      <div><GalleryCard></GalleryCard></div>
      <div><GalleryCard></GalleryCard></div>
      <div><GalleryCard></GalleryCard></div>
      <div><GalleryCard></GalleryCard></div>
    </div>
  )
}

export default GalleryDisplay