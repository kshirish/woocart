import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

const Product = ({ salesPrice, name, retailPrice, image, colors }) => (
  <div className="Product">
    <img src={image} alt={name} />
    <div className="name">{name}</div>
    <div>
      <span className="retailPrice">${retailPrice}</span>{' '}
      <span className="salesPrice">${salesPrice}</span>
    </div>
    <div>
      {colors.map((color, i) => (
        <span
          key={i}
          className="color"
          style={{
            background: color
          }}
        />
      ))}
    </div>
  </div>
);

Product.propTypes = {
  salesPrice: PropTypes.number,
  name: PropTypes.string,
  retailPrice: PropTypes.number,
  image: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string)
};

export default Product;
