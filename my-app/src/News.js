import React from 'react';
import NewsSection from './News/NewsSection';

const agenciesAPI = 'https://newsapi.org/v2/sources?apiKey=397076914c2b49ba9d6ac7e0f42e0e4a';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    
    this.state = { 
      data : [],
      agenciesList: [],
    };

    this.renderNewsSections = this.renderNewsSections.bind(this);
    this.getAgenciesList = this.getAgenciesList.bind(this);
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
    this.getAgenciesList();
  } 

  renderNewsSections(){
    let elements = [];
    let agencies = ['bbc-news', 'abc-news', 'the-new-york-times', 'cnn']    
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
