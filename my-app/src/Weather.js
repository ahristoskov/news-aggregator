import React from 'react';

export default class Weather extends React.Component{

    constructor(props){
      super(props);        

      this.state = { weather: '', city: '', temp: '' };
      this.refreshWidget = this.refreshWidget.bind(this);
    }

    refreshWidget(){
        let th = this;
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Sofia,BG&units=metric&appid=e2ced8562e44f35e13ce8481ad55b72d')
        .then(function(response) {
          return response.json();
        })
        .then(
          function(result){
            th.setState({
              weather: result.weather['0'].main,
              city: result.name,
              temp: result.main.temp
            }) 
          }
        )
        .catch(err => console.error(th.props.url, err.toString()))      
    }
  
    componentDidMount(){          
        this.refreshWidget();
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
            <p>City - {this.state.city}</p>
            <p>Weather - {this.state.weather} </p>
            <p>Temp - {this.state.temp} C&deg; </p>
            <p id="timeOfDay"></p>      
            <button type="button" className="btn" onClick={this.refreshWidget}>Refresh</button>
          </div>
        </div>
      )
    }
    
  }