import React, { useContext, useState } from 'react';
import './NarBar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const NarBar = ({setShowLogin}) => {

  const [menu, setMenu] = useState('');

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
        <Link to='/'><h1>Dining House</h1></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu('home')} className={menu==='home' ? 'active' : ''}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu==='menu' ? 'active' : ''}>Menu</a>
            <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu==='mobile-app' ? 'active' : ''}>Mobile-App</a>
            <a href='#footer' onClick={() => setMenu('contact-us')} className={menu==='contact-us' ? 'active' : ''}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" className="" /></Link>
                <div className={getTotalCartAmount() ? "dot":""}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default NarBar