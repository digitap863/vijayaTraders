import {React,useEffect,useState} from 'react'
import axios from 'axios'
import GalleryCard from './GalleryCard'
import './GalleryDisplay.css'
function GalleryDisplay() {
  const [gallery,setGallery]=useState([])

  useEffect(()=>{
    axios.get('/api/admin/viewAllGallery').then(res=>{
      setGallery(res.data) 
    })
  },[])
  return (
    <div className='galleryDisplay'>
      {gallery.map((item)=>{
        return <div><GalleryCard image={item.image}></GalleryCard></div>
      })}
    </div>
  )
}

export default GalleryDisplay