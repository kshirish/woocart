import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckBoxGroup from '../CheckBoxGroup';

import './MultiSelect.css';

class MultiSelect extends Component {
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
    this.props.onChange(name, value);
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
      errorTxt,
      helperTxt
    } = this.props;

    const { open } = this.state;

    return (
      <div className={['MultiSelect', className].join(' ')}>
        <div className="content">
          {<label htmlFor={id}>{label}</label>}
          <div className="box" onClick={e => this.toggleDropdown()}>
            {value.length
              ? value.map(v => v.displayName || v).join(', ')
              : 'Select an option'}
          </div>
          <div
            className="list"
            style={{
              display: open ? 'block' : 'none'
            }}
          >
            <CheckBoxGroup
              inline={false}
              value={value}
              items={items}
              name={name}
              onChange={this.itemClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

MultiSelect.propTypes = {
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
  value: PropTypes.arrayOf(
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
  disabled: PropTypes.bool,
  errorTxt: PropTypes.string,
  helperTxt: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default MultiSelect;
