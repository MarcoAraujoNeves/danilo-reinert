import { Link } from 'gatsby'
import React from 'react'

import { header } from '../assets/css/navbar.module.css'

const Navbar = () => {
  return (
    <header className={header}>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link" activeClassName="active-link">
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              className="nav-link"
              activeClassName="active-link"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              className="nav-link"
              activeClassName="active-link"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
