import React from 'react';
import { Link } from 'react-router-dom';

class NavBarTop extends React.Component {
  render(){
    let date = new Date().getMonth()+1;
    return (    
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-coffee"></i>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/news/bbc-news">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/calendar/"+date}>Calendar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/facebook">Facebook</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exchanges">Exchanges</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">Weather</Link>
            </li>
          </ul>
        </div>
      </nav>  
    </header>            
  );
  }
}

export default NavBarTop;
