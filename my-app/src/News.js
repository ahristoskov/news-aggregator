import React from 'react';
import ReactDOM from 'react-dom';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    this.state = { data: []};     
  }

  componentDidMount(){  
      fetch('https://newsapi.org/v1/articles?source='+this.props.newsSource+'&sortBy=top&apiKey=397076914c2b49ba9d6ac7e0f42e0e4a')
      .then((response) => 
        {
          return response.json()
        })
      .then((result) => 
        this.setState({
          data : result.articles
        })        
      )
      .catch(err => console.error(this.props.url, err.toString()))                     
  } 
    
  componentWillUnmount() {

  }
 
  render(){  
    let elements = [];
  
    elements = this.state.data.map((item) => 
      <div className="widget-content">
        <p>{item.author}</p>
        <p>{item.title}</p>
        <p>{item.description} </p>
        <p><a href={item.url}>Link</a> </p>
        <p>{item.publishedAt} </p>
      </div>);                                                                            
    
    return(elements) 
  }  

}