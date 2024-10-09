import React, { useState } from 'react';
import '../styles/LandingNav.css';

const LandingNav = () => {
  const [activeNav, setActiveNav] = useState(false);

  const toggleNav = ()=>{
    setActiveNav(!activeNav);
  }
  return (
    <div className='landingnav'>
      <div className="logo">
        <h1>
          <span className='lg_one'>VI</span>
          <span className='lg_two'>SI</span>
          <span className='lg_three'>LY</span>
        </h1>
      </div>
      <div className={`navmenu_con ${activeNav ? 'active' : ''}`}>
        <div className="navlist_con">
          <ul className='navlist'>
            <li className='navlist_li'><a href="#" className='nav_li_link'>Home</a></li>
            <li className='navlist_li'><a href="#" className='nav_li_link'>Business</a></li>
            <li className='navlist_li'><a href="#" className='nav_li_link'>Features</a></li>
            <li className='navlist_li'><a href="#" className='nav_li_link'>Pricing</a></li>
          </ul>
        </div>
        <div className="auth_con">
          <a href="#" className='auth_link'>Free trail</a>
          <a href="#" className='auth_link'>Sign in</a>
        </div>
      </div>
      <div 
       className={`hamburger ${activeNav ? 'active' : ''}`}
       onClick={toggleNav}>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
    </div>
  )
}

export default LandingNav
