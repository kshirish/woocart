import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Select.css';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDropdown = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  itemClick = (name, value) => {
    this.setState({ open: !open });
    this.props.onSelect(name, value);
  };

  render() {
    const {
      className = '',
      label,
      id,
      value,
      name,
      items,
      disabled = false,
      errorTxt, // @TODO: hasError
      helperTxt
    } = this.props;

    const { open } = this.state;

    return (
      <div className={['Select', className].join(' ')}>
        <div className="content">
          <label htmlFor={id}>{label}</label>
          <div className="box" onClick={e => this.toggleDropdown()}>
            {value ? value.displayName || value : 'Select an option'}
          </div>
          <div
            className="list"
            style={{
              display: open ? 'block' : 'none'
            }}
          >
            {items.map((item, i) => (
              <p
                id={item.id}
                className="list-item"
                key={i}
                onClick={e => this.itemClick(name, item)}
              >
                {item.displayName || item}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        displayName: PropTypes.string
      })
    ])
  ),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      displayName: PropTypes.string
    })
  ]),
  disabled: PropTypes.bool,
  errorTxt: PropTypes.string,
  helperTxt: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

export default Select;
