import React from 'react';
import ReactDOM from 'react-dom';

export default class Weather extends React.Component{

    constructor(props){
      super(props);        
      this.state = { weather: '', city: '', temp: '' };
    }
  
    componentDidMount(){
      let th = this;    
  
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Sofia,BG&units=metric&appid=e2ced8562e44f35e13ce8481ad55b72d')
      .then(function(response) {
        return response.json()
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
  
    componentWillUnmount() {
  
    }
   
    render(){    
      console.info('weather 2', this.state);    
      
      return(
        <div className="widget-content">
          <p>City - {this.state.city}</p>
          <p>Weather - {this.state.weather} </p>
          <p>Temp - {this.state.temp} C&deg; </p>
        </div>
      )
    }
    
  }