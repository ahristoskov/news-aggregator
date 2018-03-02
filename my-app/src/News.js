import React from 'react';
import Sources from './News/Sources';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    this.state = { 
                   data : [],
                   source : '',
                   results : 0,
                   newsSourceChanged : false,
                   searchString : ''
                 };
    this.fetchAPIData = this.fetchAPIData.bind(this);  
    this.handleChange = this.handleChange.bind(this);
    this.getNewsfromSource = this.getNewsfromSource.bind(this);   
  }

  fetchAPIData(agency, search, searchString){    
    let apiEndpoint = '';    
    
    if(agency === ''){
      agency = this.props.match.params.agency;     
    }
    apiEndpoint = 'https://newsapi.org/v2/top-headlines?sources='+agency+'&sortBy=top&apiKey=397076914c2b49ba9d6ac7e0f42e0e4a'; 

    if(search === true){      
      apiEndpoint = 'https://newsapi.org/v2/everything?q='+searchString+'&sortBy=popularity&apiKey=397076914c2b49ba9d6ac7e0f42e0e4a';
    }

    fetch(apiEndpoint)
    .then((response) => 
      {
        return response.json();
      })
    .then((result) => 
      this.setState({
        data : result.articles,
        results : result.totalResults,
        source : result.articles[0].source.name       
      })        
    )
    .catch(err => console.error(this.props.url, err.toString()));
  }   
  
  handleChange(event){
    this.setState({searchString : event.target.value});
  }

  componentDidMount(){      
    this.fetchAPIData('', false, '');        
  } 

  getNewsfromSource(dataFromChild){
    this.fetchAPIData(dataFromChild, false, '');
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
        <h2> {this.state.source} - {this.state.results}</h2>           
        <div className="form-row">
          <div className="col-10">
            <Sources callbackFromParent={this.getNewsfromSource} /> 
          </div>
          <div className="col-2">
            <div class="input-group">      
                <input className="form-control form-control-sm" type="text" value={this.state.searchString} placeholder="Search news for..." onChange={this.handleChange} /> 
              <div class="input-group-append">
                <input type="button" className="form-control btn btn-primary" value="Go" onClick={this.fetchAPIData.bind(this, '', true, this.state.searchString)} />
              </div>
            </div>                                    
          </div>          
        </div>                                           
        <div className="w-100 margin-top-10"></div>                      
      </div>    
      <div class="card-deck">
        {elements}             
      </div>                                             
      <div className="w-100 margin-top-10"></div>
    </div>     
  )};

}