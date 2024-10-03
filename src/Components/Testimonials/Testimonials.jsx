import React, { useRef,useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slid = useRef();
    let tx=0;

    const forward = () => {
     if(tx>-50){
        tx -=25;
     }
     slid.current.style.transform=`translateX(${tx}%)`

    }

    const backward = () => {
        if(tx<0){
        tx +=25;
     }
     slid.current.style.transform=`translateX(${tx}%)`
     
    }


  return (
    <div className='testimonials'>
      <img src={ next_icon} alt="" className='next-btn' onClick={forward}/>
      <img src={ back_icon} alt="" className='back-btn' onClick={backward} />
    <div className="slider">
        <ul ref={slid}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <img src={user_1} alt="" />
                    <div>
                        <h3>Sophia R</h3>
                    </div>
                    </div>
                    <p>"I recently purchased a chair from Chic Comforts, and it 
                        has completely transformed my workspace.
                        The attention to detail and quality is unmatched.
                        I have never been more comfortable!"</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <img src={user_2} alt="" />
                    <div>
                        <h3>Olivia M</h3>
                    </div>
                    </div>
                    <p>"As someone who spends a lot of time sitting,
                         I can honestly say this chair has made a 
                         huge difference in my comfort.
                         It supports my posture beautifully, and 
                         I couldn't be happier with my purchase!"</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <img src={user_3} alt="" />
                    <div>
                        <h3>Christina A</h3>
                    </div>
                    </div>
                    <p>"The quality of the chair I purchased is outstanding. 
                        It was easy to assemble and feels sturdy. 
                        I love that it comes in different colors 
                        to match my decor. Highly recommend!"</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <img src={user_4} alt="" />
                    <div>
                        <h3>Michael D</h3>
                    </div>
                    </div>
                    <p>"I was looking for a chair that combines comfort with a
                         modern aesthetic, and I found it at Chic Comforts.
                         It fits perfectly in my home office and has received 
                         numerous compliments from friends and family!"</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonials
