import React from 'react';
import { createStore } from 'redux';
import { Link, Redirect } from 'react-router-dom';

export default class Sources extends React.Component{

    constructor(props){
      super(props);        

      this.state = {data: []};
      this.refreshWidget = this.refreshWidget.bind(this);
      this.change = this.change.bind(this);    
    }
    
    refreshWidget(){
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

    change(event){            
        this.props.history.push(event.target.value);
    }
  
    componentDidMount(){          
        this.refreshWidget();
    }
  
    componentWillUnmount() {
  
    }        
   
    render(){                   
        let elements = []; 
        this.state.data.forEach((item, index) => 
        {
            elements.push(
                <option value={'news/'+item.id}>                    
                        {item.name}                   
                </option>
            )
        });

        return(
            <select className="custom-select col-3" onChange={this.change}>                    
                {elements}
            </select>
        )
    }
    
  }