import React, { Component } from 'react'
import { translate } from "react-i18next";
import HeroStyles from '../styles/modules/Hero.module.sass'

// from https://gist.github.com/james2doyle/5694700
const easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) {
    return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

const requestAnimFrame = (function() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }
})();

const scrollTo = (to, callback, duration) => {
  // because it's so fucking difficult to detect the scrolling element, just move them all
  const move = (amount) => {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  };

  const position = () => {
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
  };

  let start = position(),
    change = to - start,
    currentTime = 0,
    increment = 20;
  duration = (typeof(duration) === 'undefined') ? 500 : duration;
  const animateScroll = function() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);

    move(val);

    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof(callback) === 'function') {
        callback();
      }
    }
  };
  animateScroll();
};

const onKnowMore = () => {
  scrollTo(document.getElementById('Teacher').offsetTop, 0, 500);
};

class Hero extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id={HeroStyles.Hero}>
        <div className={`container`}>
          <h1 className={`${HeroStyles.proposition}`}>{t('proposition')}</h1>
          <h2 className={`${HeroStyles.tagline} Brasley-Regular`}>{t('tagline')}</h2>
          <a className={`${HeroStyles.button} animate`}>
            {t('cta')}
          </a>
          <a className={`${HeroStyles.button} ${HeroStyles.ghost} animate`} onClick={onKnowMore}>
            {t('information')}
          </a>
        </div>
      </section>
    )
  }
}

export default translate('Hero')(Hero);
