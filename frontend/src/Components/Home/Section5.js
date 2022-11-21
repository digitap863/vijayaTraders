import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Section5.css'
function Section5() {
  return (
    <div className='section5Main'>
        <div className='section5Img' >
            <img src="https://preview.colorlib.com/theme/franclin/assets/img/gallery/visit_bg.jpg.webp" alt="" />
        </div>
        <div className='section5Content' >

            <h1>Personalized design solutions</h1>
            <p>Designed by Franclin</p>
            <ul>
                <li><StarIcon></StarIcon> </li>
                <li><StarIcon></StarIcon> </li>
                <li><StarIcon></StarIcon> </li>
                <li><StarIcon></StarIcon> </li>
                <li><StarIcon></StarIcon> </li>
            </ul>
            <p className='section5Contentexp'>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
            <div className='section5ContentFlex'>
                <div >
                    <h2 className='heading'>Budget</h2>
                    <span className='heading'>$5,000</span>
                </div>
                <div>
                    <h2 className='heading'>Styles</h2>
                    <span className='heading'>Glam, Bohemian</span>
                </div>
            </div>
            <button>View Gallery</button>
        </div>
        
    </div>
  )
}

export default Section5