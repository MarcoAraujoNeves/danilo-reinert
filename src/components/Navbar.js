import { Link } from 'gatsby'
import React from 'react'
import { header } from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <header className={header}>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
