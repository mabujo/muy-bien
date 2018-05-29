import React, { Component } from 'react';
import { translate } from "react-i18next";
import ContactFormStyles from '../styles/modules/ContactForm.module.sass'

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const fields = this.state;
    fields[event.target.id] = event.target.value;
    this.props.onContactFormChanged(this.state);
    this.forceUpdate();
  }

  render () {
    const { t } = this.props;

    return (
      <div className={`container ${ContactFormStyles.ContactForm}`}>
        <form id={this.props.id} action="/" name="contact-form" method="POST" data-netlify="true" netlify-honeypot="very-important-field">
          <div className="row">
            <label>
              <span className="form-label">{t('name')}</span>
              <input type="text" value={this.state.name} onChange={this.handleChange} id="name" autoComplete="name" required/>
            </label>
          </div>
          <div className="row">
            <label>
              <span className="form-label">{t('email')}</span>
              <input type="email" value={this.state.email} onChange={this.handleChange} id="email" autoComplete="email"/>
            </label>
          </div>
          <div className="row">
            <label>
              <span className="form-label">{t('message')}</span>
              <textarea name="message" value={this.state.message} onChange={this.handleChange} id="message" placeholder={t('your-message')} >
              </textarea>
            </label>
          </div>
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="very-important-field" className="hidden"/></label>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </form>
      </div>
    )
  }
}

export default translate('ContactForm')(ContactForm);
