import React from 'react'
import Link from 'gatsby-link'
import NavbarStyles from '../styles/Navbar.module.sass'

const Navbar = () => (
  <nav className={NavbarStyles.navbar}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className={NavbarStyles.brandLink}>
          Muy Bien Espanol
        </Link>
      </div>
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
);

export default Navbar
