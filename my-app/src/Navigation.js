import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
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
    <Switch>     
        <Route path='/news/:agency' component={News}/>      
        <Route path='/calendar/:month' component={Calendar}/>
        <Route path='/facebook' component={Facebook}/>
        <Route path='/exchanges' component={CryptoExchange}/>
        <Route path='/weather' component={Weather}/>           
    </Switch>    
)

export default Main
