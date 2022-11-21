import {React,useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
function Header() {
  const [navBarActive,setNavBarActive]=useState(false)
  return (
    <div className='headerMain'  style={navBarActive?{height:'28rem',}:{height:'5rem'}}>
        <a href="/" id='home' className='nav'>Home</a>
        <a href="/products" className='nav'>Products</a>
        <a href="/gallery" className='nav'>Gallery</a>
        <img src="https://preview.colorlib.com/theme/franclin/assets/img/logo/logo.png.webp" alt="" />
        <a href="/about"  className='nav'>About</a>
        <a href="/contact"  className='nav'>Contact Us</a>
        <span onClick={()=>setNavBarActive(!navBarActive)} className='hamburger'><MenuIcon ></MenuIcon></span> 
    </div>
  )
}

export default Header