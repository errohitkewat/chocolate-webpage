import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({openCart}) => {
  return (
    <div className='flex z-9 lg:py-4 lg:px-45 fixed  w-full justify-between bg-[#28241f]/80 text-white items-center  '>
        <div className='flex font-Mulish uppercase font-extralight tracking-wider text-sm lg:gap-8'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/orderOnline'>Order Online</Link>
            <Link to='/#contact'>Contact Us</Link>
        </div>
        <div className='flex  items-center text-xl gap-6'>
           <a className='text-sm mr-4 font-extralight' href="">Login</a>
           <i className="font-extralight ri-twitter-x-line"></i>
           <i className="-ml-2 font-extralight  ri-instagram-line"></i>
           <i onClick={openCart} className="font-extralight     ri-shopping-cart-2-line"></i>
        </div> 
    </div>
  )
}

export default Navbar