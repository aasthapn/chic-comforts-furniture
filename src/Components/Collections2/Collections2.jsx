import React from 'react'
import '../Collections/Collections.css';
import photo4 from '../../assets/photo4.jpeg'
import photo5 from '../../assets/photo5.webp'
import photo6 from '../../assets/photo6.webp'

const Collections2 = () => {
  return (
    <div className='collections' id='collections2'>
        <div className='collection'>
        <img src={photo4} alt="" />
       <div className='caption'>
        <p>Elegant wooden dining chairs with plush white upholstery and for sophisticated spaces.</p>
       </div>
        </div>
        <div className='collection'>
        <img src={photo5} alt="" />
        <div className='caption'>
        <p>Minimalist teal chair with a sleek, curved design, ideal for modern interiors</p>
       </div>
        </div>
        <div className='collection'>
        <img src={photo6} alt="" />
        <div className='caption'>
        <p>Sleek black leather chair with a chrome cantilever frame, offering a perfect blend of style</p>
       </div>
        </div>
      
      
    </div>
  )
}

export default Collections2
