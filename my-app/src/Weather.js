import React from 'react';

export default class Weather extends React.Component{

    constructor(props){
      super(props);        

      this.state = { city: '', dataToday: [], dataForecast: [] };
      this.refreshWidget = this.refreshWidget.bind(this);
      this.currentConditions = 'conditions';
      this.forecast = 'forecast';
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
        this.refreshWidget(this.currentConditions);
        this.refreshWidget(this.forecast);
        setTimeout(() => {        
          this.refreshWidget(this.currentConditions);
          this.refreshWidget(this.forecast);
        }, 60000);        
    }
  
    componentWillUnmount() {
  
    }        
   
    render(){                   
      let elements = [];
      if(this.state.dataForecast.length > 0){
        this.state.dataForecast.forEach((item, index) => 
        {
          elements.push(
            <div className="col-sm">
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
            </div>
          )
        });
      }
      return(
        <div className="row"> 
          <div className="col-12">  
            <h2> Weather - {this.state.city.full} </h2>                    
          </div>                                        
          <div className="w-100 margin-top-10"></div>
          <div className="col-sm">
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
          </div>
          {elements}
        </div>
      )
    }
    
  }