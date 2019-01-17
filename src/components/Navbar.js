import React from 'react';
import { NavLink} from 'react-router-dom'
import homeImg from '../assets/img/home.png'
import contactsImg from '../assets/img/users-512.png' 
import staticImg from '../assets/img/static.png'

//we can add exact when styling  the active one so it will choose the correct one
const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="nav-container">
        {/* <a className="brand-logo">BitCoin-Time</a> */}
        <ul className="right">
          <li><NavLink to="/"><img src={homeImg} alt="home"/></NavLink></li>
          <li><NavLink to='/contacts'><img src={contactsImg} alt="contacts"/></NavLink></li>
          <li><NavLink to='/statics'><img src={staticImg} alt="static"/></NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar