import React, { Component } from 'react';
import faker from 'faker';
import FlexGrid from '../../components/FlexGrid';
import Button from '../../components/Button';
import Counter from '../../components/Counter';
import Tabs from '../../components/Tabs';

import './ProductDetails.css';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.getProductData()
    };
  }

  getProductData = () => ({
    colors: [...Array(3)].map(() => faker.commerce.color()),
    salesPrice: faker.commerce.price(),
    name: faker.commerce.productName(),
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    retailPrice: faker.commerce.price(),
    image: 'https://picsum.photos/600/600/?random'
  });

  quantityChange = newQuantity => {
    console.log(newQuantity);
  };

  render() {
    const { product } = this.state;

    return (
      <FlexGrid.Row className="ProductDetails">
        <FlexGrid.Col>
          <img
            src={product.image}
            alt={product.name}
            style={{ paddingTop: 0, paddingBottom: 0 }}
          />
          <FlexGrid.Row>
            <FlexGrid.Col>
              <img src={product.image} alt={product.name} />
            </FlexGrid.Col>
            <FlexGrid.Col>
              <img src={product.image} alt={product.name} />
            </FlexGrid.Col>
            <FlexGrid.Col>
              <img src={product.image} alt={product.name} />
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid.Col>
        <FlexGrid.Col>
          <h1 className="mb-2">{product.name}</h1>
          <div className="mb-2 retailPrice">${product.retailPrice}</div>
          <div className="mb-2 salesPrice">${product.salesPrice}</div>
          <div className="mb-2">
            {product.colors.map((color, i) => (
              <span
                key={i}
                className="color"
                style={{
                  background: color
                }}
              />
            ))}
          </div>
          <div className="mb-2">
            <a href="http://www.example.com">Size Chart</a>
          </div>
          <div className="mb-2">
            {product.sizes.map((size, i) => (
              <span key={i} className="size">
                {size}
              </span>
            ))}
          </div>
          <div className="mb-2">
            <Counter onChange={this.quantityChange} />
          </div>
          <FlexGrid.Row className="mb-2">
            <FlexGrid.Col className="mr-1">
              <Button block>Add to Cart</Button>
            </FlexGrid.Col>
            <FlexGrid.Col>
              <Button block>Buy Now</Button>
            </FlexGrid.Col>
          </FlexGrid.Row>
          <div className="mb-2">
            <h4 className="mb-1">Product details</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, aspernatur. Id quos animi nobis voluptatem beatae
              repellendus laudantium quam. Officiis numquam explicabo id
              voluptas eum delectus eveniet totam veritatis voluptatibus?
            </p>
          </div>
          <Tabs className="mb-2" initialLabel="Specifications">
            <div label="Specifications">
              <table>
                <tbody>
                  <tr>
                    <th>Ideal For</th>
                    <td>Women</td>
                  </tr>
                  <tr>
                    <th>Pattern</th>
                    <td>Embroidered</td>
                  </tr>
                  <tr>
                    <th>Fabric</th>
                    <td>Silk</td>
                  </tr>
                  <tr>
                    <th>Type</th>
                    <td>Ghagra, Choli, Dupatta Set</td>
                  </tr>
                  <tr>
                    <th>Sleeve</th>
                    <td>3/4th</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div label="Description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div label="FAQs">
              <h5>Q:Does this phone support Hindi language?</h5>
              <p>
                A:Yes. Redmi Note 7 Pro supports a total of 13 Indian languages
                including Hindi.
              </p>

              <h5>Q:Does it have a noise cancelling mic?</h5>
              <p>
                A:Yes, there is active noise cancellation with a dedicated mic.
              </p>

              <h5>Q:Can I shoot high-quality videos?</h5>
              <p>A:Yes, you can shoot 4K videos on the device.</p>
            </div>
          </Tabs>
        </FlexGrid.Col>
      </FlexGrid.Row>
    );
  }
}

export default ProductDetails;
