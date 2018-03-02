import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

  ReactDOM.render(        
      <BrowserRouter>      
        <App />
      </BrowserRouter>,    
    document.getElementById('root')
  );

registerServiceWorker();
