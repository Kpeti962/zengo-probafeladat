import React from 'react';
import "../components/styles/Nav.scss"
import logo from "../img/logo.png"
import title from "../img/title.png"

const Nav = () => {
  return (
    <div className="nav-area" >
        <div className='logo-bar '>

       <img className='logo' src={logo} alt="zengo" />
       <img className='title'  src={title} alt="zengo" />
        </div>
    </div>
  )
};

export default Nav;