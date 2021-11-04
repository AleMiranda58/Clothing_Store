import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';
import SingInUpPage from './pages/singIn-singUp-page/SingInUpPage';
import './App.css'

function App() {
  return (
    <div>
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SingInUpPage}/>
    </Switch>
    </div>
  );
}

export default App;
