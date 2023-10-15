import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <div>
      <Link to="/"><img src={Logo} alt="Logo" /></Link>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/puzzle">Puzzle</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  )
}

export default NavBar