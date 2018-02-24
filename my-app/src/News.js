import React from 'react';
import Sources from './News/Sources';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    this.state = { data: [], source: ''};
    this.refreshWidget = this.refreshWidget.bind(this);     
  }

  refreshWidget(){
    fetch('https://newsapi.org/v2/top-headlines?sources='+this.props.match.params.agency+'&sortBy=top&apiKey=397076914c2b49ba9d6ac7e0f42e0e4a')
    .then((response) => 
      {
        return response.json()
      })
    .then((result) => 
      this.setState({
        data : result.articles,
        source : result.articles[0].source.name       
      })        
    )
    .catch(err => console.error(this.props.url, err.toString())) 
  } 

  componentDidMount(){  
    this.refreshWidget();                         
  } 
    
  componentWillUnmount() {

  }
 
  render(){  
    let elements = [];
    let list = 0;    

    this.state.data.forEach((item, index) => {
      list++;
      elements.push(<div className="col-sm">
        <div className="card">
          <div className="card-body">            
            <div class="card-header">
              <h5 className="card-title">{item.author}</h5>
            </div>
            <a href={item.url} target="_blank" title={item.title}>
              <img className="card-img-top" src={item.urlToImage} alt={item.title} />
            </a>            
            <p className="card-text">
              <a href={item.url} target="_blank" title={item.title}>{index+1}. {item.title}</a> <br/>
              {item.description} <br/>
              {item.publishedAt}
            </p>
          </div>
        </div>      
      </div>)              
      if(list === 4){
        elements.push(<div class="w-100 margin-top-10"></div>); 
        list = 0;   
      }
    });    

    return(
    <div className="row">
      <div className="col-12">
        <h2> {this.state.source} </h2>           
        <Sources />                     
        <div class="w-100 margin-top-10"></div>                      
      </div>    
      {elements}                                                          
      <div class="w-100 margin-top-10"></div>
    </div>     
  )};

}