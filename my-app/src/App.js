import React from 'react';
import ReactDOM from 'react-dom';
import Widget from  './Widget.js';
import Weather from './Weather.js';
import News from './News.js';
import Facebook from './Facebook.js';
import CryptoExchange from './Exchanges/CryptoExchange';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="square">    
        <div className="small-square">
          <hr />
          <Widget value={'Facebook'} /> 
          <hr />
          <Facebook />
        </div>   
        
        <div className="small-square">
          <hr />
          <Widget value={'Twitter'} /> 
          <hr />
        </div>

        <div className="small-square">
          <hr />
          <Widget value={'CryptoExchange'} /> 
          <hr />
          <CryptoExchange />
        </div>

        <div className="small-square">
          <hr />
          <Widget value={'Weather'} />          
          <hr />
          <Weather />           
        </div>

        <div className="small-square">
          <hr />
          <Widget value={'News'} />
          <hr />
          <News newsSource={'bbc-news'} />
          <hr />
          <News newsSource={'reddit-r-all'} />          
        </div>
      </div>
    )
 }
}

export default App;
