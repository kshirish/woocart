import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const CONFIG = {
  small: '12px',
  medium: '14px',
  large: '16px'
};

const Button = ({
  children,
  variant,
  size = 'medium',
  block,
  disabled,
  onClick
}) => {
  const blockStyle = block
    ? {
        display: 'block',
        width: '100%'
      }
    : {};

  const disabledStyle = disabled
    ? {
        opacity: 0.65,
        pointerEvents: 'none',
        cursor: 'not-allowed'
      }
    : {};

  const style = {
    fontSize: CONFIG[size],
    ...blockStyle,
    ...disabledStyle
  };

  return (
    <button className={variant} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  variant: PropTypes.oneOf([
    'blue',
    'green',
    'red',
    'outline-blue',
    'outline-green',
    'outline-red',
    'link'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
