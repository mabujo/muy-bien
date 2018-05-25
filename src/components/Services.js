import React, { Component } from 'react'
import { translate } from "react-i18next";
import ServicesStyles from '../styles/modules/Services.module.sass'

class Services extends Component {
  render() {
    const { t, classes } = this.props;
    return (
      <section id={ServicesStyles.Services} className={`${ServicesStyles.Services} ${classes}`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className="col-3">

            </div>
            <div className="col-5">
              <h1>{t('heading')}</h1>
            </div>
          </div>
          <div className={ServicesStyles.sectionContent}>
            <div className="row">
              <div className="col-3">

              </div>
              <div className="col-5">
                <ul className={ServicesStyles.ServicesList}>
                  <li>{t('bullet-one')}</li>
                  <li>{t('bullet-two')}</li>
                  <li>{t('bullet-three')}</li>
                  <li>{t('bullet-four')}</li>
                </ul>
                <p>{t('ask-me')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('Services')(Services);
