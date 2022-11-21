import {React,useState,useEffect} from 'react'
import './Section2.css'
function Section2() {
    const [countActive,setCountActive]=useState(false)
    const [count,setCount]=useState(0)
    const [countx,setCountx]=useState(0)

    window.onscroll=()=>{
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        setCountActive(true)
        }
      }
    useEffect(()=>{
            setTimeout(()=>{
                if(count<450){
                setCount(count+1)
                }
                
            },4)
            setTimeout(()=>{
                if(countx<860){
                    setCountx(countx+1)
                  }
            },2)
    },[countActive,count,countx])

  return (
    <div className='section2Main'>
        <div className='topContents'>
            <h1 className='section2Heading'>We work side by side with you to create exceptional spaces.</h1>
            <div className='leftContents' >
            <div className='featuresDisplay'>
                <h1 className='section2P'>{count}+</h1>
                <p className='section2P'>Successfully completed projects</p>
            </div>
            <div className='featuresDisplay'>
                <h1 className='section2P'>{countx}</h1>
                <p className='section2P'>Highly specialised employees</p>
            </div>
        </div>
        </div>
        <div className='rightContents'>
            <p>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
            <a href="">More About Us</a>
        </div>
    </div>
  )
}

export default Section2