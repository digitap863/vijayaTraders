import React from 'react'
import image from '../../imges/img1527.jpg'
import './Section3.css'
function Section3() {
  return (
    <div className='section3Main'>
        <div className='section3Content'>
        <h1>Design the home you love</h1>
        <p>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
        <a href="">Learn More</a>
        </div>
        <img src={image} alt="" />
    </div>
  )
}

export default Section3