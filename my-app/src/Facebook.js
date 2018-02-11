import React from 'react';
import ReactDOM from 'react-dom';

export default class Facebook extends React.Component{

  constructor(props){
    super(props);        

    this.state = { data: []};
    this.refreshWidget = this.refreshWidget.bind(this);     
  }
  
  refreshWidget(){
    fetch('https://graph.facebook.com/v2.12/me/feed?fields=id,name,link,story&access_token=EAACEdEose0cBAGW2ZBW0t3ZAhkdYQk5RZAAS2rKZCgVgimsFHtHTn2mGPT87d2Hm1hHevpgc6G5ZBRIjZBgxC9S9BWhKU5iIudieofUndWH9jiSMlo2ZC9tM72o5QevbgZCVWcg32YpLNBVNPrXcnrahiZAQxu6YfsqUj9jULJH9tZCVN9eZCZB6mQxzZBqEX2K7eyZA4ZD')
    .then((response) => 
      {        
        return response.json();
      })
    .then((result) =>       
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