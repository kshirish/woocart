import React from 'react';
import PropTypes from 'prop-types';

import FlexGrid from '../FlexGrid';
import Button from '../Button';
import Counter from '../Counter';

import './CartSummary.css';

const CartSummary = ({ cartItems }) => (
  <div className="CartSummary">
    {cartItems.map(({ image, quantity, name, price }, i) => (
      <FlexGrid.Row key={i} className="mb-4" arrangeOnY="center">
        <FlexGrid.Col>
          <img src={image} alt={name} />
        </FlexGrid.Col>
        <FlexGrid.Col>{name}</FlexGrid.Col>
        <FlexGrid.Col>
          <Counter initialValue={quantity} />
        </FlexGrid.Col>
        <FlexGrid.Col>
          <Button>Remove</Button>
        </FlexGrid.Col>
        <FlexGrid.Col>${price}</FlexGrid.Col>
      </FlexGrid.Row>
    ))}
  </div>
);

CartSummary.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object)
};

export default CartSummary;
