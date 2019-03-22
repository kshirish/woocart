import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

// template
// Ex. 1
// grid-template-rows: repeat(4, 100px);
// grid-template-columns: repeat(3, 1fr);

// Ex. 2
// grid-template-rows: minmax(100px, auto);
// grid-template-columns: minmax(auto, 50 %) 1fr 3em;

// area: 2 / 2 / 3 / 3
// grid-row-start, grid-column-start, grid-row-end and grid-column-end

export const Col = ({
  children,
  className,
  style,
  area,
  align = 'stretch',
  justify = 'stretch'
}) => {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    className: [child.props.className, className].join(' '),
    style: {
      ...child.props.style,
      gridArea: area,
      alignSelf: align,
      justifySelf: justify,
      ...style
    }
  });
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  area: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string
};

export const Row = ({
  children,
  className,
  direction,
  gutter,
  template = {},
  align = 'stretch',
  justify = 'stretch'
}) => {
  const { row = [], col = [], area = [] } = template;
  const templateStyle = {
    gridTemplateAreas: `${area.map(i => `'${i}'\n`).join('')}`,
    gridTemplateRows: row.join(' '),
    gridTemplateColumns: col.join(' ')
  };

  const style = {
    display: 'grid',
    gridAutoFlow: direction,
    gridGap: gutter,
    alignItems: align,
    justifyItems: justify,
    ...templateStyle
  };

  return (
    <div className={['Row', className].join(' ')} style={style}>
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
  direction: PropTypes.oneOf(['row', 'column', 'row dense', 'column dense']),
  gutter: PropTypes.string,
  template: PropTypes.object,
  align: PropTypes.string,
  justify: PropTypes.string
};
