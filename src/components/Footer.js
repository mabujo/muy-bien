import React from 'react'
import { translate } from "react-i18next";
import LanguageSwitcher from './LanguageSwitcher';
import FooterStyles from '../styles/modules/Footer.module.sass'

const Footer = ({t}) => (
  <div>
    <div className={`${FooterStyles.above}`}>

    </div>
    <section className={`${FooterStyles.Footer}`}>
      <div className={`container ${FooterStyles.inner}`}>
      <div className='row'>
        <div className="col-5">
        <h4>{t('contact')}</h4>
      <ul className={`${FooterStyles.list}`}>
        <li><a href="https://www.instagram.com/muybienmarta/">Instagram</a></li>
        <li><a href="https://www.facebook.com/muybienespanol/">Facebook</a></li>
        </ul>
      </div>
      <div className="col-3">
        <a href="https://muybienespanol.com/">
          <span className={`${FooterStyles.logo} image-replacement`}>
            {t('site-name')}
          </span>
        </a>
        </div>
      </div>
      </div>
      <div className={`${FooterStyles.under}`}>
        <p className={`${FooterStyles.copyright}`}>
          &copy; {t('site-name')} {new Date().getFullYear()}
        </p>
        <LanguageSwitcher classes={`${FooterStyles.LanguageSwitcher}`}/>
      </div>
    </section>
  </div>
);

export default translate('Footer')(Footer);
