import React from 'react';

import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPageComponent';
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';

import Header from './components/header/HeaderComponent';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    //   console.log(user)
    // })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state)})
        });
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );

  }
}

export default App;
