import React from 'react';
import './Footer.css'
import logo from '../assets/Group.png';
import { FaFacebook ,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer-pages'>
      
      <div className='footer-logo'>
      <img src={logo}alt='footerlogo'/>
      </div>
      <div className='icon'>
        <FaFacebook/> <FaTwitter/> <FaYoutube/> <FaInstagram/>
    </div> 
      <div className='dest-content'>
        <ul>  <h1>Our Destinations</h1>
              <li className='list-content'> Canada</li>
               <li className='list-content'>Alaska</li>
               <li className='list-content'> France</li>
               <li className='list-content'>Iceland</li>
        </ul>
      </div>
      <div className='dest-content'>
        <ul>  <h1>Our Activites</h1>
              <li className='list-content'> Northern Lights</li>
               <li className='list-content' >Crusing & Sailing</li>
               <li className='list-content'> Multi-activites</li>
               <li className='list-content'>Kaying</li>
        </ul>
      </div>
      <div className='dest-content'>
        <ul>  <h1>Travel Blogs</h1>
              <li className='list-content'> Bail Travel Guide</li>
               <li className='list-content'>Sri Lanks Travel Guide</li>
               <li className='list-content'> Peru Travel Guide</li>
               <li className='list-content'>Bail Travel Guide</li>
        </ul>
      </div>
      <div className='about-content'>
        <ul>  <h1>About Us</h1>
              <li className='list-content'> Our story</li>
               <li className='list-content'>Work with us</li>
        </ul>
      </div>
      <div className='about-content'>
        <ul>  <h1>Contact Us</h1>
              <li className='list-content'> Our story</li>
               <li className='list-content'>Work with us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
