import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Collections from './Components/Collections/Collections'
import Title from './Components/Title/Title'
import Collections2 from './Components/Collections2/Collections2'
import About from './Components/About/About'
import Brands from './Components/Brands/Brands'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
      <Hero/>
   
      <div className='container'>
      <Title subtitle="Shop Now" title="Signature Collection"/>
      <Collections/>
      <Title subtitle="New Arrival" title="Exclusive Collection"/>
      <Collections2/>
      <Title subtitle="About Us" />
      <About/>
      <Title subtitle="Brands" title="Sponsored Partners"/>
      <Brands/>
      <Title subtitle="Testimonials" title="What People Say About Us"/>
 
      <Testimonials/>
      <Title subtitle="Contact Us" title="Get in Touch"/>
      <Contact/>
      <Footer/>
      </div>
      
    
    </div>
  )
}

export default App
