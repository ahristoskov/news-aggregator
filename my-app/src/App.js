import React from 'react';
import ReactDOM from 'react-dom';
import Widget from  './Widget.js';
import Weather from './Weather.js';
import News from './News.js';
import './App.css';


class App extends React.Component {
  render(){
    return (
      <div className="square">    
        <div className="small-square">
          <Widget value={'Facebook'} /> 
        </div>   

        <div className="small-square">
          <Widget value={'Twitter'} /> 
        </div>

        <div className="small-square">
          <Widget value={'Weather'} />          
          <Weather />
          <p id="timeOfDay"></p>       
        </div>

        <div className="small-square">
          <Widget value={'News'} />
          <hr />
          <News newsSource={'bbc-news'} />
          <News newsSource={'reddit-r-all'} />
        </div>
      </div>
    )
 }
}

export default App;
