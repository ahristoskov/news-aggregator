import React from 'react';

export default class Weather extends React.Component{

    constructor(props){
      super(props);        

      this.state = { city: '', data: [] };
      this.refreshWidget = this.refreshWidget.bind(this);
    }
    
    refreshWidget(){
      fetch('http://api.wunderground.com/api/5794dda6ffb50f2f/conditions/q/BG/Sofia.json')
      .then((response) => 
        {          
          return response.json()
        })
      .then((result) =>                   
          this.setState({
            city : result.current_observation.display_location,
            data : result.current_observation
          })         
      )
      .catch(err => console.error(this.props.url, err.toString()));      
    }
  
    componentDidMount(){          
        this.refreshWidget();
        setTimeout(() => {
          this.refreshWidget();
        }, 60000);        
    }
  
    componentWillUnmount() {
  
    }    
   
    render(){                   
      return(
        <div className="row"> 
          <div className="col-12">  
            <h1> Weather </h1>                                        
          </div>                       
          <div className="col-4">
            <p><img src={this.state.data.icon_url} alt={this.state.data.icon} /></p>
            <p>City - {this.state.city.full}</p>
            <p>Weather - {this.state.data.weather}</p>
            <p>Temp - {this.state.data.temp_c} C&deg; </p>
            <p>Wind - {this.state.data.wind_kph} K/PH</p>
            <p>Updated @ {this.state.data.local_time_rfc822}</p>      
            <button type="button" className="btn" onClick={this.refreshWidget}>Refresh</button>
          </div>
        </div>
      )
    }
    
  }