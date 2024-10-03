import React from 'react'
import './About.css'
import photoabout from '../../assets/photoabout.jpg'

const About = () => {
    return (
        <div className='about' >
            <div className='about-left'>
                {/* <img src="https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=600"alt=""  className='about-img'/> */}
                <img src={photoabout} alt="" className='about-img' />
            </div>
            <div className='about-right'>
                <h3>Our Commitment to Comfort</h3>
                <p>At Chic Comforts, we believe that furniture is an essential part of your comfort and well-being.
                    We are committed to providing the highest quality furniture to enhance your lifestyle and support your body posture.
                    Understanding the significant impact of well-designed furniture, we continually strive to improve our products
                    and services based on valuable customer feedback. Our goal is to guarantee the best products and quality,
                    ensuring that you experience furniture that not only speaks to your style but also provides ultimate comfort.</p>
                    
            </div>
        </div>
    )
}


export default About
