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
      <div className="container">   
          <div className="row">            
            <Widget value={'News'} />            
            <News newsSource={'bbc-news'} />            
            <News newsSource={'reddit-r-all'} />          
          </div>

          <div className="row">            
            <Widget value={'Facebook'} />             
            <Facebook />
          </div>   
          
          {/* <div className="col-4">
            <Widget value={'Twitter'} />             
          </div> */}

          <div className="row">            
            <Widget value={'CryptoExchange'} />             
            <CryptoExchange />
          </div>

          <div className="row">            
            <Widget value={'Weather'} />                      
            <Weather />           
          </div>
      </div>
    )
 }
}

export default App;
