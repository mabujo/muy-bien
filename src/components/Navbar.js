import React from 'react'
import { translate } from "react-i18next";
import Link from 'gatsby-link'
import LanguageSwitcher from './LanguageSwitcher';
import NavbarStyles from '../styles/modules/Navbar.module.sass'

const Navbar = ({t}) => (
  <nav className={`${NavbarStyles.navbar}`}>
    <div className='container'>
      <div className='row'>
        <div className="navbar-brand">
          <h1>
            <Link to="/" className={`${NavbarStyles.brandLink} ${NavbarStyles.logo} image-replacement`}>
              {t('title')}
            </Link>
          </h1>
        </div>
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <LanguageSwitcher/>
        </div>
      </div>
    </div>
  </nav>
);

export default translate('Navbar')(Navbar);
