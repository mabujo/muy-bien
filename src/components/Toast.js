import React, { Component } from 'react';
import ToastStyles from '../styles/modules/Toast.module.sass'

class Toast extends Component {
  addClass = (show) => {
    if (show) {
      return ToastStyles.ToastShow
    }
  };

  render () {
    const { show, children} = this.props;
    if (!show) {
      return null
    }

    return (
      <div className={`${ToastStyles.Toast} ${this.addClass(show)}`}>
        <div className={ToastStyles.content}>
          {children}
        </div>
      </div>
    )
  }
}

export default Toast;
