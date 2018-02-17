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
      url = 'https://graph.facebook.com/v2.12/me/feed?fields=id,name,link,story,message&access_token=EAAV189Eh8WUBAOD1oa5pWVsNfmdzC3n0lFoKMMNfHaBtwyoKY1Lc51QJZAIuQYQau6T5MWlCfzHtYRZABeSDsTjtKYNMH6NYO2n6ZCsqOsQATm8TaNb6eyD0PnTqQAZAG5scAJ6xRS9We270lkFTkQCzpZC0zIpjYCZBUTfg7r4QZAMdW9q7d2MrVaVJCElYNsZD';
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
    elements = this.state.data.map((item) =>       
      <div className="col-4">
        <div className="card">
          <div className="card-body">            
              <h5 className="card-title">{item.story}</h5>
              <p>
                {item.message}
                <a href={item.link} target="_blank">{item.name}</a>
            </p>
          </div>
        </div>     
      </div>);
    elements.push(<button className="btn" onClick={this.refreshWidget.bind(this, this.state.paging.previous)}> Previous </button>);                                                              
    elements.push(<button className="btn" onClick={this.refreshWidget.bind(this, this.state.paging.next)}>Next</button>);
    elements.push(<br/>);                                                                            
    elements.push(<button type="button" className="btn" onClick={this.refreshWidget}>Refresh</button>);
    return elements;
  }  


}