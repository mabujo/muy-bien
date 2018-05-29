import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalStyles from '../styles/modules/Modal.module.sass'

class Modal extends Component {
  render () {
    const { show, children, buttonClass, footerElements } = this.props;
    if (!show) {
      return null
    }

    return (
      <div className={`${ModalStyles.blackScreen}`}>
        <div className={ModalStyles.Modal}>
          {children}

          <div className="Modal-footer container">
            <div className="row">
              <button onClick={this.props.onClose} className={`button ${buttonClass}`}>
                Close
              </button>
              {footerElements}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
