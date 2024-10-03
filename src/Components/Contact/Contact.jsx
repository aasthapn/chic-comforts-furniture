import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow from '../../assets/arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa97a655-7f7a-4d18-b6b4-80067ca534fe")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Form Submitted Successfully", data);
      setResult(data.message);

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-coln">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>We would love to hear from you! Whether you have questions about our products,
          need assistance with your order, or just want to provide feedback, we're
          here to help. Our team is dedicated to ensuring your experience with Chic Comforts
          is nothing short of exceptional. Feel free to reach out to us via phone, email, or
          the contact form below, and we'll get back to you as soon as possible.
          Your satisfaction is our priority, and we are here to make sure you find the perfect
          chair for your comfort and style needs!</p>
        <ul>
          <li><img src={mail_icon} alt="" /> contact@chiccomforts.com </li>
          <li>
            <img src={phone_icon} alt="" /> +1 (555) 123-4567
          </li>
          <li>
            <img src={location_icon} alt="" /> 123 Comfort Lane, Suite 200, Furniture City, FC 98765
          </li>
        </ul>
      </div>
      <div className="contact-coln">
        <form onSubmit={onSubmit}>
          <label >Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <br />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter Your Phone Number(Contains only numbers)' pattern="[0-9]*" maxLength={10} minLength={10}
            inputMode="numeric" required />
          <br />
          <label>Write Your Message</label>
          <textarea name="msg" rows='6' placeholder='Enter Your Message' required></textarea>
          <br />
          <button className='btn dark-btn'>Send <img src={arrow} alt="" /></button>
        </form>
        <span>{result}</span>





      </div>


    </div>
  )
}

export default Contact
