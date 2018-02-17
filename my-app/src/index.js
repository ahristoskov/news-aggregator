import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

function updateTime(){
    const time = (<span> {new Date().toTimeString()} </span>);
    ReactDOM.render(<App />, document.getElementById('root'));
    ReactDOM.render(
      time,
      document.getElementById('timeOfDay')
    );    
  }
  
  setInterval(updateTime, 60000);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
