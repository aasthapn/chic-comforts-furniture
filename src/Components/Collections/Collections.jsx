import React from 'react'
import './Collections.css'
import photo1 from '../../assets/photo1.jpeg'
import photo2 from '../../assets/photo2.jpeg'
import photo3 from '../../assets/photo3.jpg'

const Collections = () => {
  return (
    <div className='collections'>
        <div className='collection'>
        <img src={photo1} alt="" />
       <div className='caption'>
        <p>Elegant Beige Lounge Chair with Chunky Knit Throw</p>
       </div>
        </div>
        <div className='collection'>
        <img src={photo2} alt="" />
        <div className='caption'>
        <p>Sophisticated Living Room with Tufted Accents</p>
       </div>
        </div>
        <div className='collection'>
        <img src={photo3} alt="" />
        <div className='caption'>
        <p>Ergonomic Office Chair for Maximum Productivity</p>
       </div>
        </div>
      
      
    </div>
  )
}

export default Collections
