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
      let dateSubtract = new Date() - date.getDay();     
      let today = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
      let weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      let separator = 0;    

      for(let i = 0; i < today; i++){          
        separator++;
        dateSubtract = new Date(date.getFullYear(), date.getMonth(), i).getDay();
        days.push(
            <div className="col-md-2 col-sm-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">{i+1}. {weekday[dateSubtract]}</h5>
                    </div>
                    <div className="card-body">                                 
                    <p>
                        <a href="#" onClick={this.addEvent()}><i class="fas fa-plus-circle"></i> Event</a>                   
                    </p>                
                    <p> 
                        <a href="#" onClick={this.editEvent()}><i class="fas fa-pencil-alt"></i> Event</a>                    
                    </p>
                    <p>
                        <a href="#" onClick={this.removeEvent()}><i class="fas fa-minus-circle"></i> Event</a>
                    </p>
                    </div>
                </div>
            </div>
        );
        if(separator === 6){
            days.push(<div className="w-100 margin-top-10"></div>); 
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
          <div className="col-12">
            <a href={date.getMonth()+1}>Previous <img data-direction="left" data-src="arrow-thick.svg" className="iconic" alt="arrow-thick" /></a>
            <a href={date.getMonth()+1}>Next <i class="fas fa-arrow-right"></i></a>            
          </div>
        </div>
      )
    }
    
  }