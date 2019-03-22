import React from 'react';
import FlexGrid from '../FlexGrid';

import './Footer.css';

const Footer = () => (
  <div className="Footer p-5">
    <FlexGrid.Row>
      <FlexGrid.Col>
        <h4>My Account</h4>
        <a href="http://example.com">Women</a>
        <a href="http://example.com">Clothing</a>
        <a href="http://example.com">Accessories</a>
        <a href="http://example.com">Featured</a>
      </FlexGrid.Col>
      <FlexGrid.Col>
        <h4>Why choose us?</h4>
        <a href="http://example.com">Shipping and Return</a>
        <a href="http://example.com">Secure Shopping</a>
        <a href="http://example.com">Gallery</a>
        <a href="http://example.com">Affiliates</a>
      </FlexGrid.Col>
      <FlexGrid.Col>
        <h4>Social</h4>
        <a href="http://example.com">Facebook</a>
        <a href="http://example.com">Twitter</a>
        <a href="http://example.com">Instagram</a>
      </FlexGrid.Col>
      <FlexGrid.Col>
        <h4>Store Information</h4>
        <a href="http://example.com">
          Multikart Demo Store, Demo Store India 345-659
        </a>
        <a href="http://example.com">Call Us: 123-456-7898</a>
        <a href="http://example.com">Email Us: support@woocart.com</a>
        <a href="http://example.com">Fax: 123456</a>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </div>
);

export default Footer;
