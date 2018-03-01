import React from 'react';
import Sources from './News/Sources';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    this.state = { data : [],
                   source : '',
                   newsSourceChanged : false
                 };
    this.refreshWidget = this.refreshWidget.bind(this);  
    this.myCallback = this.myCallback.bind(this);   
  }

  refreshWidget(agency){    
    if(agency === undefined){
      agency = this.props.match.params.agency;
    }
    fetch('https://newsapi.org/v2/top-headlines?sources='+agency+'&sortBy=top&apiKey=397076914c2b49ba9d6ac7e0f42e0e4a')
    .then((response) => 
      {
        return response.json();
      })
    .then((result) => 
      this.setState({
        data : result.articles,
        source : result.articles[0].source.name       
      })        
    )
    .catch(err => console.error(this.props.url, err.toString()));
  }   

  componentDidMount(){      
    this.refreshWidget();        
  } 

  myCallback(dataFromChild){
    this.refreshWidget(dataFromChild);
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
          <a href={item.url} target="_blank" title={item.title}>
              <img className="card-img-top" src={item.urlToImage} alt={item.title} />
          </a> 
          <div className="card-body">                        
            <a href={item.url} target="_blank" title={item.title}>
              <h5 className="card-title">{index+1}. {item.title}</h5>
            </a>                     
            <p className="card-text">              
              {item.description}                            
            </p>
            <p className="card-text">
              {item.publishedAt}
            </p>
          </div>
        </div>      
      </div>)              
      if(list === 4){
        elements.push(<div className="w-100 margin-top-10"></div>); 
        list = 0;   
      }
    });    

    return(
    <div className="row">
      <div className="col-12">
        <h2> {this.state.source} </h2>           
        <Sources callbackFromParent={this.myCallback} />                     
        <div className="w-100 margin-top-10"></div>                      
      </div>    
      <div class="card-deck">
        {elements}             
      </div>                                             
      <div className="w-100 margin-top-10"></div>
    </div>     
  )};

}