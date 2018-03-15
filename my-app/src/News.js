import React from 'react';
import PropTypes from 'prop-types';
import Sources from './News/Sources';
import NewsSection from './News/NewsSection';

const API = 'https://newsapi.org/v2/';
const APIKEY = 'apiKey=397076914c2b49ba9d6ac7e0f42e0e4a';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    console.info(props);    
  }
 
  render(){      
    return(
      <div>
        <NewsSection agency='bbc-news' />
        <NewsSection agency='bloomberg' />
      </div>
  )};

}