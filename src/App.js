import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';
import SingInUpPage from './pages/singIn-singUp-page/SingInUpPage';
import { auth } from './firebase/firebase.utils'
import './App.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }
  componentWillUnmount() {
    this.unsubcribeFromAuth()
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SingInUpPage}/>
      </Switch>
      </div>
    )
  }
}

export default App;
