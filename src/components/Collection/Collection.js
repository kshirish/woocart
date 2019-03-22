import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './Collection.css';

const Collection = ({ productCount, name, description, image }) => (
  <div className="Collection">
    <img src={image} alt={name} />
    <div>({productCount} Products)</div>
    <div className="name heading">{name}</div>
    <div className="description">{description}</div>
    <Button variant="link">Shop Now &rarr;</Button>
  </div>
);

Collection.propTypes = {
  productCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Collection;
