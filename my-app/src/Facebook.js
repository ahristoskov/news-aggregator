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
      url = 'https://graph.facebook.com/v2.12/me/feed?fields=id,name,link,story,message,picture&access_token=EAAV189Eh8WUBAHr3rg6AXv0fKU6jyCvTAPJu3ZCms8y22mcub2nJapVgrvGUZCps3dGGqZCZC64bZC7oZCafeSZCl9QTzpKQuF3EyKy68pMqEgDi6L4nAGtIJXMCHhsYVvOLwhcdkTpYr5HpgUFpufH3YOF93lmOsebF2anznMOc5pWvM89dc4JZCAmBQGd4CmT5hHgJaGePrgZDZD';
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
    elements.push(<button className="btn" onClick={this.refreshWidget.bind(this, this.state.paging.previous)}> Previous </button>);                                               
    elements.push(<button className="btn" onClick={this.refreshWidget.bind(this, this.state.paging.next)}>Next</button>);
    elements.push(<br/>);                                                                            
    elements.push(<button type="button" className="btn" onClick={this.refreshWidget}>Refresh</button>);
    elements.push(<div class="w-100 margin-top-10"></div>);    
    return elements;
  }  
}