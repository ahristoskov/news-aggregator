import React from 'react';
import PropTypes from 'prop-types';
import Sources from './News/Sources';
import NewsSection from './News/NewsSection';

const API = 'http://localhost:3030/api/agencies';
const agenciesAPI = 'https://newsapi.org/v2/sources?apiKey=397076914c2b49ba9d6ac7e0f42e0e4a';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    
    this.state = { 
      data : [],
      agenciesList: [],
    };
    this.fetchAPIData = this.fetchAPIData.bind(this);      
    this.renderNewsSections = this.renderNewsSections.bind(this);
    this.getAgenciesList = this.getAgenciesList.bind(this);
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

  getAgenciesList(){ 
    fetch(agenciesAPI)
    .then(response => response.json())
    .then(result => {        
        this.setState({            
          agenciesList : result.sources
        });                 
    })
    .catch(err => console.error(this.props.url, err.toString()));
  }

  componentDidMount(){      
    //this.fetchAPIData(); 
    this.getAgenciesList();
  } 

  renderNewsSections(){
    let elements = [];
    let agencies = ['bbc-news', 'abc-news', 'the-new-york-times', 'cnn']
    let list = 0;
    console.log(this.state.data);
    agencies.map((item, index) => {                  
        elements.push(<NewsSection agency={item} agenciesList={this.state.agenciesList} />);
    })          

    return elements 
  }

  render(){
    return(<div>    
        {this.renderNewsSections()}
        </div>)};
}
