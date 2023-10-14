import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/">logo</Link>
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