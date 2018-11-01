import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default class Sources extends React.Component{

    constructor(props){
      super(props);        

      this.state = {data: [], newsSourceChanged : false};            
      this.changeSource = this.changeSource.bind(this);    
    }
    
    changeSource(event){                                    
        this.props.callbackFromParent(event.target.value);                
    }

    render(){                   
        let elements = []; 
        this.props.agenciesList.map((item, index) => 
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