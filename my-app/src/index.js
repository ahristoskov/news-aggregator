import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import genApp from './Reducers/reducers.js';
import App from './App';
import './App.css';

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
