import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlexGrid from '../FlexGrid';
import Overlay from '../Overlay';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          type: 'Electronics',
          url: '/collection/123',
          subCategories: {
            title1: [
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle'
            ],
            title2: ['subtitle', 'subtitle']
          }
        },
        {
          type: 'Clothing',
          url: '/collection/123',
          subCategories: {
            title1: [
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle'
            ],
            title2: ['subtitle', 'subtitle']
          }
        },
        {
          type: 'Home & Furniture',
          url: '/collection/123',
          subCategories: {
            title1: [
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle'
            ],
            title2: ['subtitle', 'subtitle']
          }
        },
        {
          type: 'Sports',
          url: '/collection/123',
          subCategories: {
            title1: [
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle'
            ],
            title2: ['subtitle', 'subtitle']
          }
        },
        {
          type: 'Books',
          url: '/collection/123',
          subCategories: {
            title1: [
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle',
              'subtitle'
            ],
            title2: ['subtitle', 'subtitle']
          }
        }
      ],
      activeMenu: null
    };
  }

  render() {
    const { categories, activeMenu } = this.state;

    const activeMenuData = activeMenu
      ? categories.find(category => category.type === activeMenu).subCategories
      : activeMenu;

    return (
      <nav className="Header">
        <div className="mb-2 textCenter">
          <Link to="/" className="logo" />
        </div>
        <div className="secondaryNav">
          {categories.map((category, i) => (
            <Link
              key={i}
              to={category.url}
              onMouseEnter={e => this.setState({ activeMenu: category.type })}
              onMouseLeave={e => this.setState({ activeMenu: null })}
            >
              {category.type}
            </Link>
          ))}
          <Link to="/profile">Profile</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Bag</Link>
          {activeMenuData ? (
            <div className="secondaryNavOptions">
              <FlexGrid.Row arrangeOnX="start">
                {Object.keys(activeMenuData).map((key, i) => (
                  <FlexGrid.Col key={i}>
                    <h4>{key}</h4>
                    <ul>
                      {activeMenuData[key].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </FlexGrid.Col>
                ))}
              </FlexGrid.Row>
            </div>
          ) : (
            <div />
          )}
        </div>
      </nav>
    );
  }
}

export default Header;
