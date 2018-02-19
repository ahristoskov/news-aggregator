import React from 'react';

export default class Facebook extends React.Component{

  constructor(props){
    super(props);        

    this.state = { data: [], paging: ''};
    this.refreshWidget = this.refreshWidget.bind(this);     
  }
  
  refreshWidget(url){        
    if(url === ''){
      url = 'https://graph.facebook.com/v2.12/me/feed?fields=id,name,link,story,message,picture&access_token=EAACEdEose0cBAIWhZBQIUZCj0MD73rGxASYdj2M7LZBxuyvvuPp9jtLxpTsI43JzhqbCstSacVsQjl9YXzXZCZAhEvgE4Bu7guuWANgcYTCiLf5ODOlR1FYZBEfl1nPUHhsAS1ypQp6lJu9ZBArh6T7l7DWUZCiDXpsYxCuOCS8FP7lZB0uwFgiuUNZCCKcTWwaskZD';
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
              {typeof item.story !== 'undefined' ?            
                <div class="card-header">
                  <h5 className="card-title">{item.story}</h5>
                </div> : ""}
                <a href={item.link} target="_blank">            
                  <img className="card-img-top" src={item.picture} alt="" />
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
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#" onClick={this.refreshWidget.bind(this, this.state.paging.previous)}>Previous</a></li>
          <li class="page-item"><a class="page-link" href="#" onClick={this.refreshWidget.bind(this, this.state.paging.next)}>Next</a></li>
        </ul>
      </nav>
        <div className="w-100 margin-top-10"></div>
      </div> 
    )        
  }  
}