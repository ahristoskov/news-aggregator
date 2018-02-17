import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/news">News</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/facebook">Facebook</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/exchanges">Exchanges</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/weather">Weather</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="w-100 margin-top-20"></div>
          <div className="row">
            <div className="col-12">
              <h2> News </h2>                                    
            </div>
            <News newsSource={'bbc-news'} />            
            <News newsSource={'reddit-r-all'} />          
          </div>
          
          <Facebook />
            
          
          {/* <div className="col-4">
            <Widget value={'Twitter'} />             
          </div> */}

          <div className="row">       
            <div className="col-12">
              <h2> Exchanges </h2>                            
            </div>
            <CryptoExchange />
          </div>

          <div className="row"> 
            <div className="col-12">  
              <h1> Weather </h1>                                        
            </div>
            <Weather />           
          </div>
      </div>
    )
 }
}

export default App;
