import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Weather from './Weather';
import News from './News';
import Facebook from './Facebook';
import CryptoExchange from './Exchanges/CryptoExchange';
import Calendar from './Calendar/Calendar';

import { Provider } from 'react-redux';

const Main = () => (    
    <Switch>     
        <Route path='/news/:agency' component={News}/>      
        <Route path='/calendar/:month' component={Calendar}/>
        <Route path='/facebook' component={Facebook}/>
        <Route path='/exchanges' component={CryptoExchange}/>
        <Route path='/weather' component={Weather}/>           
    </Switch>    
)

Main.propTypes = {
    store: PropTypes.object.isRequired
  }

export default Main
