import React from 'react';

function Header(props) {
  return (
    <div className="header__wrapper">
      <div className="header__name">
        <h1>{props.name}</h1>
      </div>
      
      <div className="header__nav-left">
        <button className='header__nav-item header__nav-item--active'>_hello</button>
        <button className='header__nav-item'>_about-me</button>
        <button className='header__nav-item'>_projects</button>
      </div>

      <div className="header__nav-right">
        <button className='header__nav-item'>_contact-me</button>
      </div>
    </div>
  )
}


export default Header;