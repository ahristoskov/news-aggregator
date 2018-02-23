import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Weather from './Weather';
import News from './News';
import Facebook from './Facebook';
import CryptoExchange from './Exchanges/CryptoExchange';
import Calendar from './Calendar/Calendar';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/news/:agency' component={News}/>      
      <Route path='/calendar' component={Calendar}/>
      <Route path='/facebook' component={Facebook}/>
      <Route path='/exchanges' component={CryptoExchange}/>
      <Route path='/weather' component={Weather}/>      
    </Switch>
  </main>
)

export default Main
