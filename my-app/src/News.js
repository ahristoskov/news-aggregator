import React from 'react';
import PropTypes from 'prop-types';
import Sources from './News/Sources';
import NewsSection from './News/NewsSection';

const API = 'http://localhost:3030/api/agencies';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    
    this.state = { 
      data : []
    };
    this.fetchAPIData = this.fetchAPIData.bind(this);      
    this.renderNewsSections = this.renderNewsSections.bind(this);
  }

  fetchAPIData(){    
    fetch(API)
    .then(response => response.json())
    .then(result => 
      this.setState({
        data : result        
      })          
    )
    .catch(err => console.error(this.state, err.toString()));     
  }  

  componentDidMount(){      
    this.fetchAPIData(); 
  } 

  renderNewsSections(){
    let elements = [];
    let agencies = this.state.data;
    let list = 0;

    agencies.map((item, index) => {                  
        elements.push(<NewsSection agency={item.agency} />)
    })          

    return elements 
  }

  render(){
    return(<div>    
        {this.renderNewsSections()}
        </div>)};
}
