import React from 'react';

import { createStore } from 'redux';
import genApp from './Reducers/reducers.js';
import Main from './Navigation';
import NavBarTop from './Navigation/NavBarTop.js';
import NavBarBottom from './Navigation/NavBarBottom.js';

class App extends React.Component {
  render(){
    let date = new Date().getMonth()+1;
    let store = createStore(genApp);
    return (
      <div className="container-fluid">               
        <NavBarTop />
        
        <div className="w-100 margin-top-20"></div>
        
        <Main store={store} />        
        
        <div className="w-100 margin-top-20"></div>  
        
        <NavBarBottom />
      </div>
    )
 }
}

export default App;
