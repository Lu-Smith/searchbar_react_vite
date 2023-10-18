import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div 
    className='bg-slate-200 p-2 flex flex-row justify-between 
    items-center shadow-md shadow-slate-300'>
      <Link to="/"><img src={Logo} alt="Logo" className='hover:animate-spin flex-none w-14 h-14'/></Link>
      <ul className='flex flex-row justify-around items-end gap-2' >
        <NavLink 
        to="/" 
        className='hover:text-pink-400 transition-all duration-200 focus:text-white focus:bg-black p-2 rounded'>
          Home
        </NavLink>
        <NavLink 
        to="/about" 
        className='hover:text-pink-400 transition-all duration-200 focus:text-white focus:bg-black p-2 rounded'>
          About
        </NavLink>
        <NavLink 
        to="/puzzle" 
        className='hover:text-pink-400 transition-all duration-200 focus:text-white focus:bg-black p-2 rounded'>
          Puzzle
        </NavLink>
        <NavLink 
        to="/contact" 
        className='hover:text-pink-400 transition-all duration-200 focus:text-white focus:bg-black p-2 rounded'>
          Contact
        </NavLink>
      </ul>
    </div>
  )
}

export default NavBar