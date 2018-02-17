import React from 'react';
import ReactDOM from 'react-dom';

export default class Facebook extends React.Component{

  constructor(props){
    super(props);        

    this.state = { data: [], paging: ''};
    this.refreshWidget = this.refreshWidget.bind(this);     
  }
  
  refreshWidget(url){    
 
    if(url === ''){
      url = 'https://graph.facebook.com/v2.12/me/feed?fields=id,name,link,story,message,picture&access_token=EAACEdEose0cBAObZB0Dca10vBRoSahVCXkvzQFsJZCBkO4NRDxX1TMkatuQ5vfZAHsbbgTQLb6JU4UNLjVkziaKwTQ0rzccELRn4qVOZAcSeCui6vXqSuZAa79A7tz2Bb0ZBbInt4VrmxNDUYIGrZAbBeBYmP6sbZCpi06Vl0p5putHShfrLHMjOP3jsojEpys4iWonWgFdZAPwZDZD';
    }
    
    fetch(url)
    .then((response) => 
      {        
        return response.json();
      })
    .then((result) => {            
      this.setState({
        data : result.data,
        paging : result.paging
      })        
    })
    .catch(err => console.error(this.props.url, err.toString())) 
    
  } 

  componentDidMount(){  
    this.refreshWidget('');                         
  } 
    
  componentWillUnmount() {}

  render(){    
    let elements = [];
    let list = 0;

    this.state.data.forEach((item, index) => {   
      list++;    
      elements.push(<div className="col-sm">
          <div className="card">
            <div className="card-body"> 
              {typeof item.story != 'undefined' ?            
                <div class="card-header">
                  <h5 className="card-title">{item.story}</h5>
                </div> : ""}
                <a href={item.link} target="_blank">            
                  <img className="card-img-top" src={item.picture} alt="Card image cap"/>
                </a>
                <p className="card-text">
                  {item.message}
                  <a href={item.link} target="_blank">{item.name}</a>
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
          <h2> Facebook </h2>                       
        </div>     
      {elements}
        <div className="col-1">
          <button className="btn" onClick={this.refreshWidget.bind(this, this.state.paging.previous)}> Previous </button>                                               
        </div>
        <div className="col-1">
          <button className="btn" onClick={this.refreshWidget.bind(this, this.state.paging.next)}>Next</button>
        </div>
        <div class="w-100 margin-top-10"></div>
      </div> 
    )        
  }  
}