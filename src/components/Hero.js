import React, { Component } from 'react'
import { translate } from "react-i18next";
import HeroStyles from '../styles/modules/Hero.module.sass'

class Hero extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id={HeroStyles.Hero}>
        <div className={`container`}>
          <h1 className={`${HeroStyles.proposition}`}>{t('proposition')}</h1>
          <h2 className={`${HeroStyles.tagline} Brasley-Regular`}>{t('tagline')}</h2>
        </div>
      </section>
    )
  }
}

export default translate('Hero')(Hero);
