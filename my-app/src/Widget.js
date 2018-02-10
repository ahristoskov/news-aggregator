import React from 'react';
import ReactDOM from 'react-dom';

export default class Widget extends React.Component{
    render(){
      return(
        <div className="widget-title">  
           <h2>{this.props.value}</h2>    
        </div>  
      )
    }
  }