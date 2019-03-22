import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CheckBoxGroup.css';

const CheckBox = ({
  className,
  id,
  name,
  value: item,
  label,
  checked,
  disabled,
  onChange
}) => (
  <label className={['CheckBox', className].join(' ')} htmlFor={id}>
    <span className={['content', checked ? 'tick' : ''].join(' ')} />
    <input
      checked={checked}
      id={id}
      type="checkbox"
      name={name}
      value={item.value || item}
      onChange={e => onChange(item)}
    />{' '}
    {label || item.value || item}
  </label>
);

CheckBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      displayName: PropTypes.string
    })
  ]).isRequired,
  onChange: PropTypes.func
};

const isChecked = (item, valueItems) => {
  if (valueItems)
    if (item.value) return !!valueItems.find(vI => vI.value === item.value);
    else return !!valueItems.find(vI => vI === item);
  else return false;
};

class CheckBoxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  itemClick = selectedItem => {
    const { items, onChange, name, value: valueItems } = this.props;

    if (selectedItem.value) {
      const existingItem = valueItems.find(
        vI => vI.value === selectedItem.value
      );
      existingItem
        ? onChange(
            name,
            valueItems.filter(vI => vI.value !== selectedItem.value)
          )
        : onChange(name, valueItems.concat(selectedItem));
    } else {
      const existingItem = valueItems.find(vI => vI === selectedItem);
      existingItem
        ? onChange(name, valueItems.filter(vI => vI !== selectedItem))
        : onChange(name, valueItems.concat(selectedItem));
    }
  };

  render() {
    const {
      className = '',
      id,
      inline,
      label,
      value,
      items,
      name,
      disabled = false,
      errorTxt,
      helperTxt
    } = this.props;

    return (
      <div className={['CheckBoxGroup', className].join(' ')}>
        {label ? <label htmlFor={id}>{label}</label> : ''}
        {items.map((item, i) => (
          <CheckBox
            className={inline ? 'inline' : ''}
            key={i}
            disabled={disabled}
            id={item.id}
            name={name}
            checked={isChecked(item, value)}
            value={item}
            label={item.displayName || item}
            onChange={this.itemClick}
          />
        ))}
      </div>
    );
  }
}

CheckBoxGroup.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        displayName: PropTypes.string
      })
    ])
  ),
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  errorTxt: PropTypes.string,
  helperTxt: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CheckBoxGroup;
