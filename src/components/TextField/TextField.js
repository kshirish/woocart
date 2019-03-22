import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TextField.css';

const TextField = ({
  className = '',
  label,
  type = 'text',
  placeholder,
  required,
  id,
  name = 'lolx',
  value,
  disabled = false,
  errorTxt, // @TODO: hasError
  helperTxt,
  validator,
  onChange
}) => (
  <div className={['TextField', className].join(' ')}>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      type={type}
      validator={validator}
      onChange={e => onChange(name, e.target.value)}
    />
  </div>
);

TextField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  errorTxt: PropTypes.string,
  helperTxt: PropTypes.string,
  validator: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

export default TextField;
