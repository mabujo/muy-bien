import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Muy Bien Espanol
        </Link>
      </div>
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default Navbar
