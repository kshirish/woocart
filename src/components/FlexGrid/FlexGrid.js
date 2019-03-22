import React from 'react';
import PropTypes from 'prop-types';
import './FlexGrid.css';

const CONFIG = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
  around: 'space-around',
  between: 'space-between',
  stretch: 'stretch',
  baseline: 'baseline'
};

// @TODO: check for other viewports as well ... currently for `md`
export const Col = ({ className = '', children, flex = 0, offset = 0 }) => {
  const offsetStyle = offset
    ? {
        marginLeft: (offset * 100) / 12 + '%'
      }
    : {};

  const style = {
    flex: flex ? '0 0 auto' : 1,
    flexBasis: (flex * 100) / 12 + '%',
    maxWidth: flex ? (flex * 100) / 12 + '%' : '100%',
    boxSizing: 'border-box',
    ...offsetStyle
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  flex: PropTypes.number,
  offset: PropTypes.number
};

export const Row = ({
  children,
  className = '',
  arrangeOnX = 'start',
  arrangeOnY = 'stretch'
}) => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    justifyContent: CONFIG[arrangeOnX],
    alignItems: CONFIG[arrangeOnY]
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  className: PropTypes.string,
  arrangeOnX: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  arrangeOnY: PropTypes.oneOf([
    'top',
    'middle',
    'bottom',
    'baseline',
    'stretch'
  ])
};
