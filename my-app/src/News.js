import React from 'react';
import PropTypes from 'prop-types';
import Sources from './News/Sources';
import NewsSection from './News/NewsSection';

export default class News extends React.Component{
  render(){      
    return(
      <div>
        <NewsSection agency='bbc-news' />
        <NewsSection agency='bloomberg' />
      </div>
  )};
}