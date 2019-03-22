import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ initialValue = 0, onChange }) => (
  <div className="Counter">
    <button onClick={onChange}>+</button>
    <input type="text" value={initialValue} />
    <button onClick={onChange}>-</button>
  </div>
);

Counter.propTypes = {
  initialValue: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default Counter;
