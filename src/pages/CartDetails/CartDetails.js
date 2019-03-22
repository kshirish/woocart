import React, { Component } from 'react';
import faker from 'faker';
import FlexGrid from '../../components/FlexGrid';
import CartSummary from '../../components/CartSummary';
import Button from '../../components/Button';

import './CartDetails.css';

class CartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: this.getCartSummary()
    };
  }

  getCartSummary = () =>
    [...Array(4)].map(() => ({
      quantity: 1,
      price: faker.commerce.price(),
      name: faker.commerce.productName(),
      image: 'https://picsum.photos/600/600/?random'
    }));

  render() {
    const { cartItems } = this.state;

    return (
      <div className="CartDetails">
        <h3 className="textCenter mb-4">Cart Details</h3>
        <CartSummary cartItems={cartItems} />
        <FlexGrid.Row className="mt-2 mb-2">
          <FlexGrid.Col className="textLeft">
            <Button>Continue Shopping</Button>
          </FlexGrid.Col>
          <FlexGrid.Col className="textRight">
            <Button>Checkout</Button>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </div>
    );
  }
}

export default CartDetails;
