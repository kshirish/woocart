import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import SearchPage from '../../pages/SearchPage';
import CollectionDetails from '../../pages/CollectionDetails';
import ProductDetails from '../../pages/ProductDetails';
import CartDetails from '../../pages/CartDetails';
import ShippingAddress from '../../pages/ShippingAddress';
import Payment from '../../pages/Payment';

import './Main.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={SearchPage} />
      <Route path="/collection/:id" component={CollectionDetails} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/cart" component={CartDetails} />
      <Route path="/shipping-address" component={ShippingAddress} />
      <Route path="/payment" component={Payment} />
    </Switch>
  </main>
);

export default Main;
