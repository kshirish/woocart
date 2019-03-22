import React, { Component } from 'react';
import MultiSelect from '../../components/MultiSelect';
import FlexGrid from '../../components/FlexGrid';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Select from '../../components/Select';

import './ShippingAddress.css';

const states = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Chandigarh',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Orissa',
  'Punjab',
  'Pondicherry',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal'
];

class ShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      street: '',
      city: '',
      state: '',
      pincode: ''
    };
  }

  render() {
    return (
      <div className="ShippingAddress">
        <FlexGrid.Row>
          <FlexGrid.Col className="p-2">
            <h3 className="textCenter mb-4">Shipping Address</h3>
            <form>
              <FlexGrid.Row>
                <FlexGrid.Col flex={6}>
                  <TextField
                    className="pr-1"
                    label="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={(name, value) => this.setState({ [name]: value })}
                    required
                  />
                </FlexGrid.Col>
                <FlexGrid.Col flex={6}>
                  <TextField
                    className="pl-1"
                    label="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={(name, value) => this.setState({ [name]: value })}
                  />
                </FlexGrid.Col>
                <FlexGrid.Col flex={6}>
                  <TextField
                    className="pr-1"
                    label="Phone No."
                    name="phoneNo"
                    value={this.state.phoneNo}
                    onChange={(name, value) => this.setState({ [name]: value })}
                    required
                  />
                </FlexGrid.Col>
                <FlexGrid.Col flex={6}>
                  <TextField
                    className="pl-1"
                    label="Email"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={(name, value) => this.setState({ [name]: value })}
                    required
                  />
                </FlexGrid.Col>
              </FlexGrid.Row>
              <TextField
                label="Street Address"
                name="street"
                value={this.state.street}
                onChange={(name, value) => this.setState({ [name]: value })}
                required
              />
              <TextField
                label="Town/City"
                name="city"
                value={this.state.city}
                onChange={(name, value) => this.setState({ [name]: value })}
                required
              />
              <FlexGrid.Row>
                <FlexGrid.Col flex={6}>
                  <Select
                    className="pr-1"
                    label="State"
                    name="state"
                    value={this.state.state}
                    items={states}
                    onSelect={(name, value) => this.setState({ [name]: value })}
                    required
                  />
                </FlexGrid.Col>
                <FlexGrid.Col flex={6}>
                  <TextField
                    className="pl-1"
                    label="Pincode"
                    name="pincode"
                    value={this.state.pincode}
                    onChange={(name, value) => this.setState({ [name]: value })}
                    required
                  />
                </FlexGrid.Col>
              </FlexGrid.Row>
            </form>
            <div>
              <FlexGrid.Row className="mb-2 mt-2">
                <FlexGrid.Col className="textLeft">
                  <Button>Return to cart</Button>
                </FlexGrid.Col>
                <FlexGrid.Col className="textRight">
                  <Button onClick={e => console.log(this.state)}>
                    Continue to payment
                  </Button>
                </FlexGrid.Col>
              </FlexGrid.Row>
            </div>
          </FlexGrid.Col>
          <FlexGrid.Col className="p-2">
            <FlexGrid.Row className="productDetails">
              <FlexGrid.Col flex={2}>
                <img
                  src="http://placehold.it/300X300"
                  alt="Desert Dandelion Grace Maxi Dress"
                />
              </FlexGrid.Col>
              <FlexGrid.Col flex={8}>
                <h4>Desert Dandelion Grace Maxi Dress</h4>
                <p>Navy Blue / XS</p>
              </FlexGrid.Col>
              <FlexGrid.Col flex={2} className="salesPrice">
                $195.00
              </FlexGrid.Col>
            </FlexGrid.Row>

            <FlexGrid.Row className="productDetails">
              <FlexGrid.Col flex={2}>
                <img
                  src="http://placehold.it/300X300"
                  alt="Desert Dandelion Grace Maxi Dress"
                />
              </FlexGrid.Col>
              <FlexGrid.Col flex={8}>
                <h4>Scarlett Wrap Maxi Dress Black</h4>
                <p>S</p>
              </FlexGrid.Col>
              <FlexGrid.Col flex={2} className="salesPrice">
                $199.00
              </FlexGrid.Col>
            </FlexGrid.Row>
            <hr />
            <FlexGrid.Row className="mb-1">
              <FlexGrid.Col className="bolder">Subtotal</FlexGrid.Col>
              <FlexGrid.Col className="textRight">$390.00</FlexGrid.Col>
            </FlexGrid.Row>
            <FlexGrid.Row className="mb-1">
              <FlexGrid.Col className="bolder">Shipping</FlexGrid.Col>
              <FlexGrid.Col className="textRight">$4.00</FlexGrid.Col>
            </FlexGrid.Row>
            <hr />
            <FlexGrid.Row className="bigger">
              <FlexGrid.Col className="bolder">Total</FlexGrid.Col>
              <FlexGrid.Col className="textRight">$394.00</FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </div>
    );
  }
}

export default ShippingAddress;
