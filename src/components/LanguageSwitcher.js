import React, { Component } from "react";
import { translate } from "react-i18next";
import SwitcherStyles from '../styles/LanguageSwitcher.module.sass'

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  renderLanguageChoice({ code, label }) {
    let buttonClassNames = `${SwitcherStyles.button} ${SwitcherStyles[code]} `;

    if (this.state.language === code) {
      buttonClassNames += `${SwitcherStyles.selected} `;
      buttonClassNames += ' '
    }

    return (
      <span
        key={code}
        className={buttonClassNames}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {/*{code}*/}
      </span>
    );
  }

  render() {
    const languages = [
      { code: "en", label: "English" },
      { code: "es", label: "Español" },
    ];

    return (
      <div className="LanguageSwitcher">
        {languages.map(language => this.renderLanguageChoice(language))}
      </div>
    );
  }
}

export default translate("LanguageSwitcher")(LanguageSwitcher);
