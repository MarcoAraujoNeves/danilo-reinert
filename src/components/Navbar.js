/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react'
import { Link, navigate } from 'gatsby'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import MoonClearFillIcon from 'remixicon-react/MoonClearFillIcon'
import SunFillIcon from 'remixicon-react/SunFillIcon'

import { ThemeContext } from '../contexts/ThemeContext'

import {
  header,
  searchWrapper,
  toggleThemeButton,
} from '../assets/css/navbar.module.css'

const Navbar = ({ location }) => {
  const params = location && new URLSearchParams(location.search)
  const searchValue =
    params && params.get('search') && params.get('search').toLowerCase()

  const [search, setSearch] = useState(searchValue || '')
  const { colorMode, setColorMode } = useContext(ThemeContext)

  const handleSearch = event => {
    event.preventDefault()

    navigate(`/posts/?search=${search}`)
  }

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
              to="/posts/"
              className="nav-link"
              activeClassName="active-link"
            >
              POSTS
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

      {colorMode ? (
        <button
          className={toggleThemeButton}
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          {colorMode === 'light' ? (
            <SunFillIcon color="#35475e" size={18} />
          ) : (
            <MoonClearFillIcon color="#a6bbcd" size={18} />
          )}
        </button>
      ) : (
        false
      )}

      <form className={searchWrapper} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button type="submit">
          <SearchLineIcon color="#ffffff" size={14} />
        </button>
      </form>
    </header>
  )
}

export default Navbar
