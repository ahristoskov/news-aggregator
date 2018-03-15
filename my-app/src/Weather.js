import React from 'react';

const API = 'http://api.wunderground.com/api/5794dda6ffb50f2f/';

export default class Weather extends React.Component{

    constructor(props){
      super(props);        

      this.state = { city: '', dataToday: [], dataForecast: [] };
      this.getAPIData = this.getAPIData.bind(this);
      this.renderCards = this.renderCards.bind(this);
      this.currentConditions = 'conditions';      
    }
    
    getAPIData(key){
      let url = API+key+'/q/BG/Sofia.json';

      fetch(url)
      .then(response => response.json())
      .then(result => {
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
        this.getAPIData(this.currentConditions);
        this.getAPIData('forecast');    
    }

    renderCards(){
      let elements = [];
      if(this.state.dataForecast.length > 0){
        this.state.dataForecast.map((item, index) => 
        {
          elements.push(
            <div className="card">
              <div className="card-body">            
                <h4 className="card-title">{item.date.weekday}</h4>                 
                <p><img src={item.icon_url} alt={item.icon} /></p>          
                <p>Weather : {item.conditions}</p>
                <p>Temp high : {item.high.celsius} C&deg; </p>
                <p>Temp low : {item.low.celsius} C&deg; </p>
                <p>Wind : {item.avewind.kph} K/PH</p>                  
              </div>
            </div>                         
          )
        });
      }
      return elements;
    }
   
    render(){                         
      return(
        <div className="row justify-content-center"> 
          <div className="col-md-12">  
            <h2> Weather - {this.state.city.full} </h2>                    
          </div>                                        
          <div className="w-100 margin-top-10"></div>
          <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Current</h4>                 
                <p><img src={this.state.dataToday.icon_url} alt={this.state.dataToday.icon} /></p>            
                <p>Weather : {this.state.dataToday.weather}</p>
                <p>Temp : {this.state.dataToday.temp_c} C&deg; </p>
                <p>Wind : {this.state.dataToday.wind_kph} K/PH</p>
                <p>Updated @ {this.state.dataToday.local_time_rfc822}</p>                  
              </div>
            </div>
            {this.renderCards()}
          </div>          
        </div>
      )
    }    
  }