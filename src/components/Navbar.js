import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'

import { header } from '../assets/css/navbar.module.css'

const Navbar = () => {
  const params = new URLSearchParams(location.search)
  const searchValue = params.get('search') && params.get('search').toLowerCase()

  const [search, setSearch] = useState(searchValue || '')

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

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button type="submit">
          <SearchLineIcon color="#42b883" size={16} />
        </button>
      </form>
    </header>
  )
}

export default Navbar
