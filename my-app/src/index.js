import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import genApp from './Reducers/reducers.js';
import App from './App';
import './App.css';

const store = createStore(genApp);
  ReactDOM.render(          
    <BrowserRouter>
      <Provider store={store}>       
        <App />
      </Provider>
    </BrowserRouter>,    
    document.getElementById('root')
  );

registerServiceWorker();
