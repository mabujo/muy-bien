import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'

import '../styles/all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    {console.log(children)}
    <Helmet title="Learn Spanish Online | Muy Bien Espanol" />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};


export default TemplateWrapper
