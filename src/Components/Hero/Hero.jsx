import React, { useState } from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

import { Link } from 'react-scroll'

const Hero = () => {

  return (
    <div className='hero container'>

      <div className='hero-text'>
        <h1>Your Comfort Is Our Happiness</h1>

        <p>We offer best quality furniture to our customers
          for their comfort and enjoyment.</p>
        <Link to='collections' smooth={true} duration={500} offset={-260} >

          <button className='btn '>
            Shop now <img src={arrow} alt="" />
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero

