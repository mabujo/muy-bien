import React, { Component } from 'react'
import { translate } from "react-i18next";
import TeacherStyles from '../styles/modules/Teacher.module.sass'
import TeacherImage from '../img/components/Teacher/photo-placeholder.png'

class Teacher extends Component {
  render() {
    const { t, classes } = this.props;
    return (
      <section id="Teacher" className={classes}>
        <div className={`container`}>
          <div className={`row ${TeacherStyles.heading}`}>
            <div className="col-8">
              <h1>{t('about')}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img className={`${TeacherStyles.avatar}`} src={TeacherImage} alt="{t('spanish-teacher')}"/>
            </div>
            <div className="col-5">
              <p>{t('paragraph-one')}</p>
              <p>{t('paragraph-two')}</p>
              <p>{t('paragraph-three')}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('Teacher')(Teacher);
