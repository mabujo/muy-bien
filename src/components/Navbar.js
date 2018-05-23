import React from 'react'
import Link from 'gatsby-link'
import LanguageSwitcher from './LanguageSwitcher';
import NavbarStyles from '../styles/Navbar.module.sass'

const Navbar = () => (
  <nav className={`${NavbarStyles.navbar} container`}>
    <div>
      <div className="navbar-brand">
        <Link to="/" className={NavbarStyles.brandLink}>
          Muy Bien Espanol
        </Link>
      </div>
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
        <LanguageSwitcher/>
      </div>
    </div>
  </nav>
);

export default Navbar
