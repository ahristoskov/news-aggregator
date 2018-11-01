import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const API = 'https://newsapi.org/v2/sources?apiKey=397076914c2b49ba9d6ac7e0f42e0e4a';

export default class Sources extends React.Component{

    constructor(props){
      super(props);        

      this.state = {data: [], newsSourceChanged : false};            
      this.changeSource = this.changeSource.bind(this);    
    }
    
    componentDidMount(){          
      fetch(API)
      .then(response => response.json())
      .then(result => {        
          this.setState({            
            data : result.sources
          });                 
      })
      .catch(err => console.error(this.props.url, err.toString()));
    }

    changeSource(event){                                    
        this.props.callbackFromParent(event.target.value);                
    }

    render(){                   
        let elements = []; 
        this.state.data.map((item, index) => 
        {
            elements.push(
               item.id === this.props.src ? <option value={item.id} key={index} selected>{item.name}</option> : <option value={item.id} key={index}>{item.name}</option>
            )
        });

        return(
            <select className="custom-select col-md-2 col-sm-12" onChange={this.changeSource}>                    
                {elements}
            </select>            
        )
    }
    
  }