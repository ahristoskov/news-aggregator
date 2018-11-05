import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBarTop extends React.Component {
  render(){
    let date = new Date().getMonth()+1;    
    return (    
    <header>      
      <nav className="navbar navbar-expand-lg justify-content-center">
        <div className="row">      
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Link className="navbar-brand App-logo" to="/">
              <i className="fas fa-coffee"></i>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/calendar/"+date}>Calendar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/facebook">Facebook</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/exchanges">Exchanges</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weather">Weather</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <i className="fas fa-question"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>        
    </header>        
  );
  }
}