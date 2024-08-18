import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className='container'>
      <img src={logo} alt='Logo' className='logo' />
      <ul className={mobileMenu ? 'mobile-menu open' : 'mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="event" smooth={true} offset={-260} duration={500}>Events</Link></li>
        <li><Link to="speaker" smooth={true} offset={-150} duration={500}>Speakers</Link></li>
        <li><Link to="schedule" smooth={true} offset={-260} duration={500}>Schedule</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu} alt='Menu' className='menuicon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
