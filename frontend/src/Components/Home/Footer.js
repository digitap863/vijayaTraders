import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'
function Footer() {
  return (
    <div className='footerMain'>
        <div className='div1'>
        <img src="https://preview.colorlib.com/theme/franclin/assets/img/logo/logo.png.webp" alt="" />
        <p>10-738-3940</p>
        <a href="">contact@carwash.com</a><br></br>
        <div className='socialMediaIcons'>
            <span><InstagramIcon></InstagramIcon></span>
           <span><FacebookIcon></FacebookIcon></span> 
            <span><LinkedInIcon></LinkedInIcon></span>
           <span> <YouTubeIcon></YouTubeIcon></span>
        </div>
        </div>
        <div className='div2'>
            <h2>Navigation</h2>
            <div className='navs'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </div>
        <div className='div3'>
            <h2>Services</h2>
            <div className='navs'>
                <p>Drone Mapping</p>
                <p>Real Estate</p>
                <p>Commercial</p>
               <p>Construction</p>
            </div>
        </div>
    </div>
  )
}

export default Footer