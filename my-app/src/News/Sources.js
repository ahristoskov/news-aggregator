import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default class Sources extends React.Component{

    constructor(props){
      super(props);        

      this.state = {data: [], newsSourceChanged : false};      
      this.getSources = this.getSources.bind(this);
      this.change = this.change.bind(this);    
    }
    
    getSources(){
      let url = 'https://newsapi.org/v2/sources?apiKey=397076914c2b49ba9d6ac7e0f42e0e4a';

      fetch(url)
      .then((response) => 
        {          
          return response.json();
        })
      .then((result) => {        
          this.setState({            
            data : result.sources
          });                 
      })
      .catch(err => console.error(this.props.url, err.toString()));      
    }

    componentDidMount(){          
        this.getSources();
    }

    change(event){                    
        history.replace(event.target.value);  
        this.props.callbackFromParent(event.target.value);                
    }
  
    componentWillUnmount() {
  
    }        
   
    render(){                   
        let elements = []; 
        this.state.data.forEach((item, index) => 
        {
            elements.push(
                <option value={item.id}>                    
                        {item.name}                   
                </option>
            )
        });

        return(
            <select className="custom-select col-md-2 col-sm-12" onChange={this.change}>                    
                {elements}
            </select>            
        )
    }
    
  }