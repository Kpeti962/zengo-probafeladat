import React from 'react';
import logo from "../img/logo.png"
import title from "../img/title.png"

const Nav = () => {
  return (
    <div className='bg-white w-full h-60' >
        <div className='flex flex-row items-center '>

       <img className='mx-5 my-3 ml-32 ' src={logo} alt="" />
       <img className='mt-1'  src={title} alt="" />
        </div>
    </div>
  )
};

export default Nav;