import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Weather from './Weather';
import News from './News';
import Facebook from './Facebook';
import CryptoExchange from './Exchanges/CryptoExchange';
import Calendar from './Calendar/Calendar';


export default class Main extends React.Component{

    constructor(props){
      super(props);   
      console.info(props);     
    }

    render(){
       return( 
        <Switch>     
            <Route path='/news' component={News}/>      
            <Route path='/calendar/:month' component={Calendar}/>
            <Route path='/facebook' component={Facebook}/>
            <Route path='/exchanges' component={CryptoExchange}/>
            <Route path='/weather' component={Weather}/>           
        </Switch>
       )
    }
}    