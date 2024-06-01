import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1 className='logo'>Dining House</h1>
                <p>Dining House promises an unforgettable experience that tantalizes the taste buds and leaves you craving for more. 
                    Join us and discover why Dining House is not just a restaurant, but a destination for food enthusiasts and connoisseurs alike.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Customer Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contact us</h2>
                <ul>
                    <li>+1 123-456-7890</li>
                    <li>dininghouse@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © Dining House.com - All Right Reserved.
        </p>

    </div>
  )
}

export default Footer