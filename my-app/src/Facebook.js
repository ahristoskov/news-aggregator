import React from 'react';
import ReactDOM from 'react-dom';

export default class Facebook extends React.Component{

  constructor(props){
    super(props);        

    this.state = { data: []};
    this.refreshWidget = this.refreshWidget.bind(this);     
  }
  
  refreshWidget(){
    fetch('https://graph.facebook.com/v2.12/me/feed?fields=id,name,link,story&access_token=EAACEdEose0cBAHPaMUFh7Mmxkvb4nLVZA31iOVPBVZCfbHDVHZAhZB9nidx4ZBDNWV81yYbTYQNz1HWy7fKkjQRpb0fyVm2vbY8cJBfWhYoLpayKDWaJqKT7FrNqCuJZAGZBZBRmF6JXxaYqmJlswAnFOZBLwWhPxO1uZBEfDG0HH2WPlH6O5eUgOkSE8iFTPY25oZD')
    .then(response => 
      {        
        return response.json();
      })
    .then(result =>        
      this.setState({
        data : result.data
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
  
    elements = this.state.data.map((item) => 
      <div className="widget-content">
        <p>{item.story}</p>   
        <p><a href={item.link} target="_blank">{item.name}</a></p>     
      </div>);                                                                            
    elements.push(<button type="button" className="btn" onClick={this.refreshWidget}>Refresh</button>)
    return(elements) 
  }  

}