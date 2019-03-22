import React, { Component } from 'react';
import faker from 'faker';
import FlexGrid from '../../components/FlexGrid';
import Collection from '../../components/Collection';
import Product from '../../components/Product';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: this.getCollectionData(),
      products: this.getProductData()
    };
  }

  getCollectionData = () =>
    [...Array(4)].map(() => ({
      productCount: faker.random.number(),
      name: faker.random.word(),
      description: faker.lorem.sentence(),
      image: 'https://picsum.photos/600/600/?random'
    }));

  getProductData = () =>
    [...Array(6)].map(() => ({
      colors: [...Array(2)].map(() => faker.commerce.color()),
      salesPrice: faker.commerce.price(),
      name: faker.commerce.productName(),
      retailPrice: faker.commerce.price(),
      image: 'https://picsum.photos/600/600/?random'
    }));

  render() {
    const { collections, products } = this.state;

    return (
      <div className="Home">
        <div className="section">
          <div className="header">
            <h4 className="mb-2">Special Offer</h4>
            <h2 className="mb-2">Top Collections</h2>
          </div>
          <div className="content">
            <FlexGrid.Row>
              {collections.map((collection, i) => (
                <FlexGrid.Col flex={6} key={i}>
                  <Collection key={i} {...collection} />
                </FlexGrid.Col>
              ))}
            </FlexGrid.Row>
          </div>
        </div>
        <div className="section">
          <div className="header">
            <h4 className="mb-2">Exclusive Products</h4>
            <h2 className="mb-2">Special Products</h2>
          </div>
          <div className="content">
            <FlexGrid.Row>
              {products.map((product, i) => (
                <FlexGrid.Col flex={4} key={i}>
                  <Product key={i} {...product} />
                </FlexGrid.Col>
              ))}
            </FlexGrid.Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
