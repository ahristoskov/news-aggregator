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
      url = 'https://graph.facebook.com/v2.12/me/feed?fields=id,name,link,story,message,picture&access_token=EAAV189Eh8WUBAH2K8LYlDIdDPLnGncSXiadi3WOZB49Vsges1V8DssEXal4Y1bMiZAzjknqqixQd8VHacydB2FGB6qm1R7iZCXB3GCSOKOy3Q8cKOslOierkC8y31RTZCZBPioAmHdUBLCd7XS8109Q1VHZCVtVJh289YkFSl5PxELhf5HZCqj4gPpcVcVXZASsZD';
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
    this.state.data.forEach((item, index) => {       
    elements.push(<div className="col-sm">
          <div className="card">
            <div className="card-body"> 
            {typeof item.story != 'undefined' ?            
              <div class="card-header">
                <h5 className="card-title">{item.story}</h5>
              </div> : ""}            
                <img className="card-img-top" src={item.picture} alt="Card image cap"/>
                <p className="card-text">
                  {item.message}
                  <a href={item.link} target="_blank">{item.name}</a>
              </p>
            </div>
          </div>                     
    </div>)      
    if(index > 0 && index % 3 === 0){
        elements.push(<div class="w-100 margin-top-10"></div>);
      }
    });
    
    return(       
      <div className="row">    
        <div className="col-12">
          <h2> Facebook </h2>                       
        </div>     
      {elements}
      <button className="btn" onClick={this.refreshWidget.bind(this, this.state.paging.previous)}> Previous </button>                                               
      <button className="btn" onClick={this.refreshWidget.bind(this, this.state.paging.next)}>Next</button>
      <br/>                                                                
      <button type="button" className="btn" onClick={this.refreshWidget}>Refresh</button>
      <div class="w-100 margin-top-10"></div>
      </div> 
    )        
  }  
}