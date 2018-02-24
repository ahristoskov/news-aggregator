import React from 'react';
import { createStore } from 'redux';

export default class Calendar extends React.Component{

    constructor(props){
      super(props);        

      this.state = { data : [] };
      this.refreshWidget = this.refreshWidget.bind(this);     
      this.addEvent = this.addEvent.bind(this);
      this.editEvent = this.editEvent.bind(this);
      this.removeEvent = this.removeEvent.bind(this); 
    }

    addEvent(eventInfo){

      this.setState({
        data : [
          {"day":eventInfo.day}
        ]
      });
    }

    editEvent(){

    }
    
    removeEvent(){
      this.setState({
        data : []
      });
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
      let dateSubtract = '';
      let today = new Date(date.getFullYear(), this.props.match.params.month, 0).getDate();
      let weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let separator = 0;    

      for(let i = 0; i < today; i++){          
        separator++;
        dateSubtract = new Date(date.getFullYear(), this.props.match.params.month, i).getDay();
        days.push(
            <div className="col-md-2 col-sm-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">{i+1}. {weekday[dateSubtract]}</h5>
                    </div>
                    <div className="card-body">                        
                      {this.state.data.length > 0 ? <p>{this.state.data[0]}</p> : ''}                                                 
                    <p>
                      <a href="#" onClick={this.addEvent.bind(this, weekday[dateSubtract])}><i className="fas fa-plus-circle"></i> Add new event</a>                   
                    </p>                
                    <p> 
                      <a href="#" onClick={this.editEvent}><i className="fas fa-pencil-alt"></i> Edit event</a>                    
                    </p>
                    <p>
                      <a href="#" onClick={this.removeEvent}><i className="fas fa-minus-circle"></i> Remove event</a>
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
            <h2><i className="far fa-calendar-alt"></i> Calendar - {month[parseInt(this.props.match.params.month)-1]}</h2>                    
          </div>                                                             
          {days}         
          <div className="w-100 margin-top-10"></div>
          <div className="col-12 text-center">
            <h2><a href={'/calendar/'+(parseInt(this.props.match.params.month)-1)}><i class="fas fa-arrow-left"></i> Previous Month</a>&nbsp;|&nbsp;
            <a href={'/calendar/'+(parseInt(this.props.match.params.month)+1)}>Next Month <i class="fas fa-arrow-right"></i></a></h2>
          </div>
        </div>        
      )
    }
    
  }