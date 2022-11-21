import React from 'react'
import ContactForm from '../Components/Contact/ContactForm'
import ContactSection from '../Components/Contact/ContactSection'
import Map from '../Components/Contact/Map'
import Footer from '../Components/Home/Footer'
import Header from '../Components/Home/Header'

function Contact() {
  return (
    <div>
        <Header/>
        <ContactSection></ContactSection>
        <Map></Map>
        <ContactForm></ContactForm>
        <Footer/>
    </div>
  )
}

export default Contact