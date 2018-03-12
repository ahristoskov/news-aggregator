import React from 'react';

import Main from './Navigation';
import NavBarTop from './Navigation/NavBarTop.js';
import NavBarBottom from './Navigation/NavBarBottom.js';

class App extends React.Component {
  render(){
    let date = new Date().getMonth()+1;
    return (
      <div className="container-fluid">               
        <NavBarTop />
        
        <div className="w-100 margin-top-20"></div>
        
        <Main />        
        
        <div className="w-100 margin-top-20"></div>  
        
        <NavBarBottom />
      </div>
    )
 }
}

export default App;
