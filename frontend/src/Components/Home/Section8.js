import React from 'react'
import './Section8.css'
import image from '../../imges/img55.jpg'
function Section8() {
  return (
    <div className='section8Main'>
        <div className='section8Content'>
        <h1>We work with more than 200 vendors, big and small.</h1>
        <p>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
        <button>Let's Discuss</button>
        </div>
        <div className='section8MainImg' style={{backgroundImage:`url(${image})`}}>
        </div>
    </div>

  )
}

export default Section8
