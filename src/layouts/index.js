import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/all.sass'

// Don't remove
import i18n from '../components/i18n';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Learn Spanish Online | Muy Bien Espanol" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
