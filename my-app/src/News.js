import React from 'react';
import ReactDOM from 'react-dom';

export default class News extends React.Component{

  constructor(props){
    super(props);        
    this.state = { data: []};
    this.refreshWidget = this.refreshWidget.bind(this);     
  }

  refreshWidget(){
    fetch('https://newsapi.org/v1/articles?source='+this.props.newsSource+'&sortBy=top&apiKey=397076914c2b49ba9d6ac7e0f42e0e4a')
    .then((response) => 
      {
        return response.json()
      })
    .then((result) => 
      this.setState({
        data : result.articles
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
    <div className="col-4">
      <div className="card">
        <div className="card-body">            
            <h5 className="card-title">{item.author}</h5>
            <img class="card-img-top" src={item.urlToImage} alt="Card image cap"/>
            <p>
              <a href={item.url} target="_blank">{item.title}</a> <br/>
              {item.description} <br />
              {item.publishedAt} <br/>
          </p>
        </div>
      </div>     
    </div>);                                                                          
    // elements.push(<button type="button" className="btn" onClick={this.refreshWidget}>Refresh</button>)
    elements.push(<div class="w-100">&nbsp;</div>)    
    return(elements) 
  }  

}