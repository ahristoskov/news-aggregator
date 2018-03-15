import React from 'react';
import PropTypes from 'prop-types';
import Sources from './Sources';

const API = 'https://newsapi.org/v2/';
const APIKEY = 'apiKey=397076914c2b49ba9d6ac7e0f42e0e4a';

export default class NewsSection extends React.Component{

  constructor(props){
    super(props);        
    console.info(props);
    this.state = { 
                   data : [],
                   source : '',
                   results : 0,
                   newsSourceChanged : false,
                   searchString : ''
                 };
    this.fetchAPIData = this.fetchAPIData.bind(this);  
    this.getAgencyFromSource = this.getAgencyFromSource.bind(this);  
    this.renderCards = this.renderCards.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);    
  }

  fetchAPIData(agency, search, searchString){    
    let apiEndpoint = '';    
    
    if(agency === ''){
      agency = this.props.agency;     
    }
    apiEndpoint = API+'top-headlines?sources='+agency+'&sortBy=top&'+APIKEY; 

    if(search === true){      
      apiEndpoint = API+'everything?q='+searchString+'&sortBy=popularity&'+APIKEY;
    }

    fetch(apiEndpoint)
    .then(response => response.json())
    .then(result => 
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

  handleKeyPress(event){    
    if(event.key === 'Enter'){            
      this.fetchAPIData('', true, this.state.searchString);
    }
  }

  componentDidMount(){      
    this.fetchAPIData('', false, '');        
  } 

  getAgencyFromSource(newsSource){
    this.fetchAPIData(newsSource, false, '');
  }

  renderCards(){
    let elements = [];
    let list = 0;    
    
    this.state.data.map((item, index) => {
      list++;                    
        elements.push(  
          <div className="card" key={index}>
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
          </div>)                                     
      if(list === 4){        
        elements.push(<div className="w-100 margin-top-10" key={10+index}></div>) 
        list = 0;         
      }
    });         

    return(
      <div className="card-deck">{elements}</div>
    )
  }
 
  render(){      
    return(
    <div className="row">
      <div className="col-12">
        <h2> {this.state.source} - Top {this.state.results} results</h2>           
        <div className="form-row">
          <div className="col-md-10 col-sm-12">
            <Sources callbackFromParent={this.getAgencyFromSource} /> 
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="input-group">      
                <input className="form-control form-control-sm" type="text" value={this.state.searchString} placeholder="Search news for..." onChange={this.handleChange} 
                onKeyPress={this.handleKeyPress} /> 
              <div className="input-group-append">
                <input type="button" className="form-control btn btn-primary" value="Go" onClick={this.fetchAPIData.bind(this, '', true, this.state.searchString)} />
              </div>
            </div>                                    
          </div>          
        </div>                                           
        <div className="w-100 margin-top-10"></div>                                     
        {this.renderCards()}     
      </div>                                                            
      <div className="w-100 margin-top-10"></div>
    </div>     
  )};

}