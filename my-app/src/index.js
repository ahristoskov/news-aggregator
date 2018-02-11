import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

function updateTime(){
    const time = (<span> {new Date().toTimeString()} </span>);
    ReactDOM.render(
      time,
      document.getElementById('timeOfDay')
    );
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  
  setInterval(updateTime, 600000);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
