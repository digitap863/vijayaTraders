import React from 'react'
import './Section4.css'
import fevicol from '../../imges/fevicol.png'
import haefele from '../../imges/haefele_logo.png'
import pidilite from '../../imges/pidilite.png'
import jowat from '../../imges/jowat-logo_corporate.png'
import rehau from '../../imges/rehau-logo.svg-data.png'
function Section4() {
  return (
    <div className='section4Main'>
        <div className='section4MainContent'>
        <h2>
        “Franclin managed everything from furniture selection, purchase, delivery and assembly, and have been a pleasure working with”
        </h2>
        <p>- Shonda Leer, Chief of Staff at Franclin Technologies</p>
        </div>
        <div className='brandList'>

            <ul>
            <li>
                   <div><img src={rehau} alt="" style={{width:'12rem'}} /></div>
                </li>
                <li>
                    <div><img src={pidilite} alt="" /></div>
                </li>
                <li>
                   <div> <img src={haefele} alt="" /></div>
                </li>
                <li>
                   <div><img src={jowat} alt="" /></div>
                
                </li>
                <li>
                    <div><img src={fevicol} alt=""style={{marginLeft:'5rem'}} /></div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Section4