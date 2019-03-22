import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RadioBoxGroup.css';

const RadioBox = ({
  className,
  id,
  name,
  checked,
  disabled,
  value: item,
  label,
  onChange
}) => (
  <label className={['RadioBox', className].join(' ')} htmlFor={id}>
    <span className={['content', checked ? 'tick' : ''].join(' ')} />
    <input
      checked={checked}
      id={id}
      type="radio"
      name={name}
      value={item.value || item}
      onChange={e => onChange(name, item)}
    />{' '}
    {label || item.value || item}
  </label>
);

RadioBox.propTypes = {
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
  ]),
  onChange: PropTypes.func
};

const isChecked = (item, valueItem) => {
  if (valueItem)
    if (item.value) return item.value === valueItem.value;
    else return item === valueItem;
  else return false;
};

const RadioBoxGroup = ({
  className = '',
  id,
  inline,
  label,
  name,
  value,
  items,
  disabled = false,
  errorTxt,
  helperTxt,
  onChange
}) => (
  <div className={['RadioBoxGroup', className].join(' ')}>
    {label ? <label htmlFor={id}>{label}</label> : ''}
    {items.map((item, i) => (
      <RadioBox
        className={inline ? 'inline' : ''}
        key={i}
        id={item.id}
        name={name}
        disabled={disabled}
        checked={isChecked(item, value)}
        value={item}
        label={item.displayName || item}
        onChange={onChange}
      />
    ))}
  </div>
);

RadioBoxGroup.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      displayName: PropTypes.string
    })
  ]),
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  errorTxt: PropTypes.string,
  helperTxt: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default RadioBoxGroup;
