import React from 'react';
import ReactDOM from 'react-dom';

export default class CryptoExchange extends React.Component{

  constructor(props){
    super(props);        

    this.state = { data: [] };
    this.refreshWidget = this.refreshWidget.bind(this);    
    this.change = this.change.bind(this);    
  }
  
  refreshWidget(currency){
    if(currency === ''){
      currency = 'BTC';
    }
    fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+currency+'&to_currency=USD&apikey=YUPIG8T80DHNLZ3F')
    .then(response => 
      {                        
        return response.json();
      })
    .then(result => {              
      this.setState({
        data : result["Realtime Currency Exchange Rate"]
      });              
    })
    .catch(err => console.error(this.props.url, err.toString())); 
    
  } 

  change(event){    
    this.refreshWidget(event.target.value);
  }

  componentDidMount(){  
    this.refreshWidget('');                         
  } 
    
  componentWillUnmount() {

  }
 
  render(){      
    return(
      <div className="d-flex flex-column">
        <div className="p-2">From Currency Code - {this.state.data["1. From_Currency Code"]}</div>   
        <div className="p-2">From Currency Name - {this.state.data["2. From_Currency Name"]}</div>   
        <div className="p-2">To Currency Code - {this.state.data["3. To_Currency Code"]}</div>   
        <div className="p-2">Exchange Rate - {Math.floor(this.state.data["5. Exchange Rate"])}</div>   
        <div className="p-2">Last Refreshed - {this.state.data["6. Last Refreshed"]}</div>              
        <div className="p-2">
          <select className="custom-select" onChange={this.change}>
            <option value="BTC"> BTC </option>
            <option value="ETH"> ETH </option>
            <option value="XRP"> XRP </option>
            <option value="ADA"> ADA </option>
            <option value="BCH"> BCH </option>
          </select>
        </div>      
      </div>                                                                          
    )
  }  

}