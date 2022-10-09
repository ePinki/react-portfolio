import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function Header({name}) {
  return (
    <div className="header__wrapper">
      <div className="header__name">
        <h1>{name}</h1>
      </div>
      
      <div className="header__nav-left">
        <Link to='/' className='header__nav-item header__nav-item--active'>_hello</Link>
        <Link to='/about' className='header__nav-item'>_about-me</Link>
        <Link to='/projects' className='header__nav-item'>_projects</Link>
      </div>

      <div className="header__nav-right">
        <button className='header__nav-item'>_contact-me</button>
      </div>
    </div>
  )
}


export default Header;