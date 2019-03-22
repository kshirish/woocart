import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Overlay.css';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  escapeHandler = event => {
    if (event.key === 'Escape') {
      const { onHide } = this.props;
      onHide();
    }
  };

  componentDidMount = () => {
    document.body.addEventListener('keydown', this.escapeHandler, false);
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('keydown', this.escapeHandler, false);
  };

  render() {
    const {
      children,
      overlayClassName = '',
      show,
      onHide,
      width = '100%'
    } = this.props;

    return (
      <div className={`Overlay`} style={{ display: show ? 'flex' : 'none' }}>
        <div
          className={['OverlayContent', overlayClassName].join(' ')}
          style={{ width }}
        >
          <span className="crossIcon" onClick={onHide}>
            x
          </span>
          {children}
        </div>
      </div>
    );
  }
}

Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  overlayClassName: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  width: PropTypes.string
};

export default Overlay;
