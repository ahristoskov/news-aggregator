import React from 'react';
import { Link } from 'react-router-dom';

class NavBarBottom extends React.Component {
  render(){
    return (    
        <footer>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-center">
                <p>All rights reserved &reg;</p>
            </nav>          
        </footer>           
    );
  }
}

export default NavBarBottom;
