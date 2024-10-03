import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobile(!mobile);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobile ? 'mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to='collections' smooth={true} duration={500} offset={-260}>Shop</Link></li>
        <li><Link to='collections2' smooth={true} duration={500} offset={-260}>New Arrival</Link></li>
        <li><Link to='about' smooth={true} duration={500} offset={-260}>About</Link></li>
        <li><Link to='brand' smooth={true} duration={500} offset={-260}>Brands</Link></li>
        <li><Link to='testimonials' smooth={true} duration={500} offset={-260}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} duration={500} offset={-260}><button className='btn'>Contact us</button></Link></li>
      </ul>
      <img onClick={toggleMenu} src={menu_icon} alt="Menu Icon" className='menu-icon' />
    </nav>
  );
};

export default Navbar;


