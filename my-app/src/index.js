import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import genApp from './Reducers/reducers.js';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(genApp);

  ReactDOM.render(   
    <Provider store={store}> 
      <BrowserRouter>      
        <App />
      </BrowserRouter>
    </Provider>,    
    document.getElementById('root')
  );

registerServiceWorker();
