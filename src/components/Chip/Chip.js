import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Chip.css';

const Chip = ({
  className = '',
  items,
  errorTxt, // @TODO: hasError
  helperTxt,
  onChange
}) => (
  <div className={['Chips', className].join(' ')}>
    {items.map((item, i) => (
      <span key={i} className="Chip">
        {item}
        <span className="crossIcon">x</span>
      </span>
    ))}
  </div>
);

Chip.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  errorTxt: PropTypes.string,
  helperTxt: PropTypes.string,
  onChange: PropTypes.func
};

export default Chip;
