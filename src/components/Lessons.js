import React, { Component } from 'react'
import { translate } from "react-i18next";
import LessonsStyles from '../styles/modules/Lessons.module.sass'
import LessonsImage from '../img/components/Lessons/lessons.jpg'

class Lessons extends Component {
  render() {
    const { t, classes } = this.props;
    return (
      <section id={LessonsStyles.Lessons} className={classes}>
        <div className={`container`}>
          <div className={`row`}>
            <div className="col-8">
              <h1>{t('heading')}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <p>{t('paragraph-one')}</p>
              <p>{t('paragraph-two')}</p>
              <p>{t('paragraph-three')} <span className={`${LessonsStyles.price}`}>25€</span></p>
            </div>
            <div className="col-3">
              <img src={LessonsImage} alt={t('heading')} className={`feature-image`}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('Lessons')(Lessons);
