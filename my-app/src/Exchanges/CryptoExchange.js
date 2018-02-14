import React from 'react';
import ReactDOM from 'react-dom';

export default class CryptoExchange extends React.Component{

  constructor(props){
    super(props);        

    this.state = { data: []};
    this.refreshWidget = this.refreshWidget.bind(this);     
  }
  
  refreshWidget(){
    fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=YUPIG8T80DHNLZ3F')
    .then(response => 
      {                        
        return response.json();
      })
    .then(result => {              
      this.setState({
        data : result["Realtime Currency Exchange Rate"]
      })              
    })
    .catch(err => console.error(this.props.url, err.toString())) 
  } 

  componentDidMount(){  
    this.refreshWidget();                         
  } 
    
  componentWillUnmount() {

  }
 
  render(){      
    return(
      <div className="widget-content">
        <p>From Currency Code - {this.state.data["1. From_Currency Code"]}</p>   
        <p>From Currency Name - {this.state.data["2. From_Currency Name"]}</p>   
        <p>To Currency Code - {this.state.data["3. To_Currency Code"]}</p>   
        <p>Exchange Rate - {this.state.data["5. Exchange Rate"]}</p>   
        <p>Last Refreshed - {this.state.data["6. Last Refreshed"]}</p>              
      <button type="button" className="btn" onClick={this.refreshWidget}>Refresh</button>    
      </div>                                                                          
    )
  }  

}