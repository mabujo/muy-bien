import React, { Component } from 'react'
import { translate } from "react-i18next";
import HeroStyles from '../styles/modules/Hero.module.sass'
import Modal from './Modal'
import ContactForm from './ContactForm'
import Toast from './Toast'

// smooth scroll to element
const scroll = () => {
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

  return {
    scrollTo
  }
};

const onKnowMore = () => {
  scroll().scrollTo(document.getElementById('Teacher').offsetTop, 0, 500);
};

let _contactFormState;
const _contactFormId = 'contactForm';
let _triggerCloseModal;
let _triggerShowToast;

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const submitContactForm = (event) => {
  event.preventDefault();
  const contactForm = document.getElementById(_contactFormId);
  fetch("/", {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": contactForm.getAttribute("name"),
      ..._contactFormState
    })
  })
    .then(() => {
      if (typeof _triggerCloseModal === 'function') {
        _triggerCloseModal();
        _triggerShowToast();
      }
    })
    .catch(error => console.log(error))
};

const submitContactFormButton = () => {
  return (
    <button onClick={submitContactForm} className={`button ${HeroStyles.submitButton}`}>
      Submit
    </button>
  )
};

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Modal: {
        isOpen: false
      },
      Toast: {
        isOpen: false
      }
    }
  }

  toggleModal = () => {
    this.setState({
      Modal: {
        isOpen: !this.state.Modal.isOpen
      },
      Toast: {
        isOpen: this.state.Toast.isOpen
      }
    })
  };

  showToast = () => {
    this.setState({
      Modal: {
        isOpen: this.state.Modal.isOpen
      },
      Toast: {
        isOpen: !this.state.Toast.isOpen
      }
    });

    setTimeout(() => {
      this.setState({
        Modal: {
          isOpen: this.state.Modal.isOpen
        },
        Toast: {
          isOpen: false
        }
      });
    }, 5000)
  };

  render() {
    _triggerCloseModal = this.toggleModal;
    _triggerShowToast = this.showToast;
    const { t } = this.props;
    return (
      <div>
        <section id={HeroStyles.Hero}>
          <div className={`container`}>
            <h1 className={`${HeroStyles.proposition}`}>{t('proposition')}</h1>
            <h2 className={`${HeroStyles.tagline} Brasley-Regular`}>{t('tagline')}</h2>
            <a className={`button animate`} onClick={this.toggleModal}>
              {t('cta')}
            </a>
            <a className={`button ghost animate`} onClick={onKnowMore}>
              {t('information')}
            </a>
          </div>
        </section>
        <Modal show={this.state.Modal.isOpen} onClose={this.toggleModal} buttonClass={HeroStyles.ModalButton} footerElements={submitContactFormButton()}>
          <ContactForm onContactFormChanged={function(event){_contactFormState = event}} id={_contactFormId}  />
        </Modal>
        <Toast show={this.state.Toast.isOpen}>
          <div>
            Thanks for the message, we will get back to you soon!
          </div>
        </Toast>
      </div>
    )
  }
}

export default translate('Hero')(Hero);
