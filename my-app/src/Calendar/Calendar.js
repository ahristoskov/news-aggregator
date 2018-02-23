import React from 'react';
import { createStore } from 'redux';

export default class Calendar extends React.Component{

    constructor(props){
      super(props);        

      this.state = { data : [] };
      this.refreshWidget = this.refreshWidget.bind(this);      
    }

    addEvent(){

    }

    editEvent(){

    }
    
    removeEvent(){

    }

    refreshWidget(key){
      let url = 'http://api.wunderground.com/api/5794dda6ffb50f2f/'+key+'/q/BG/Sofia.json';

      fetch(url)
      .then((response) => 
        {          
          return response.json();
        })
      .then((result) => {
        if(key === 'conditions'){                  
          this.setState({
            city : result.current_observation.display_location,
            dataToday : result.current_observation
          });         
        }
        else{
          this.setState({                       
            dataForecast : result.forecast.simpleforecast.forecastday
          });
        }
      })
      .catch(err => console.error(this.props.url, err.toString()));      
    }

    componentDidMount(){          
  
    }
  
    componentWillUnmount() {
  
    }        
   
    render(){                   
      let days = [];      
      let date = new Date();      
      let today = new Date(date.getMonth(), date.getFullYear(), 0).getDate();
      let separator = 0;

      for(let i = 0; i < today; i++){
        separator++;
        days.push(
            <div className="col-2">
            <div className="card">
                <div class="card-header">
                    <h4 className="card-title">{i+1}</h4>
                </div>
                <div className="card-body">                                 
                <p>
                    <a href="#" onClick={this.addEvent()}><span class="oi oi-plus"></span> Event</a>                   
                </p>                
                <p> 
                    <a href="#" onClick={this.editEvent()}><span class="oi oi-pencil"></span> Event</a>                    
                </p>
                <p>
                    <a href="#" onClick={this.removeEvent()}><span class="oi oi-minus"></span> Event</a>
                </p>
                </div>
            </div>
            </div>
        );
        if(separator === 6){
            days.push(<div class="w-100 margin-top-10"></div>); 
            separator = 0;   
        }
      }

      return(
        <div className="row"> 
          <div className="col-12">  
            <h2> Calendar </h2>                    
          </div>                                                   
          {days}         
          <div className="w-100 margin-top-10"></div>
        </div>
      )
    }
    
  }