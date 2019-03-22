import React from 'react';
import PropTypes from 'prop-types';

import './Placeholder.css';

// type: rect, circle
const Placeholder = ({ type, style = {}, CustomComponent }) => {
  const { width, height } = style;

  return type ? (
    <div
      className={['Placeholder', type].join(' ')}
      style={{
        ...style,
        width: width ? width + 'px' : '100%',
        height: height ? height + 'px' : '100%',
        borderRadius: type === 'circle' ? width + 'px' : 0
      }}
    />
  ) : (
    <CustomComponent />
  );
};

Placeholder.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  CustomComponent: PropTypes.element
};

export default Placeholder;
