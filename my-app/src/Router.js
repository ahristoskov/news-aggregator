import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Widget from  './Widget.js';
import Weather from './Weather.js';
import News from './News.js';
import Facebook from './Facebook.js';
import CryptoExchange from './Exchanges/CryptoExchange';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/news/:agency' component={News}/>      
      <Route path='/facebook' component={Facebook}/>
      <Route path='/exchange' component={CryptoExchange}/>
      <Route path='/weather' component={Weather}/>      
    </Switch>
  </main>
)

export default Main
