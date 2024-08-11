import React from 'react'
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedin, FaSquareFacebook, FaTwitter } from 'react-icons/fa6';
import { GiHeartTower } from 'react-icons/gi';
const Footer = () => {
    const date=new Date();
     let year=date.getFullYear();
    
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
               <GiHeartTower className='logo'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci labore nobis.</p>
            <div className="social-icons">
                <FaSquareFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedin/>
            </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@dilfoodapp.com</li>
            </ul>
        </div>
       
      </div>
      <hr />
      <p className='footer-copyright'>Copyright {year} © DilFoodapp.com - All Right Reserved</p>
    </div>
  )
}

export default Footer;
