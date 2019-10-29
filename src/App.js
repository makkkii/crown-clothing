import React from 'react';

import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPageComponent';
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';

import Header from './components/header/HeaderComponent';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
