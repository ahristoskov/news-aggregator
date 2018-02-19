import React from 'react';

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
      <div className="row">       
        <div className="col-12">
          <h2> Exchanges </h2>                            
        </div>
        <div className="col-md">
          <p>From Currency Code - {this.state.data["1. From_Currency Code"]}</p>   
          <p>From Currency Name - {this.state.data["2. From_Currency Name"]}</p>   
          <p>To Currency Code - {this.state.data["3. To_Currency Code"]}</p>   
          <p>Exchange Rate - {Math.floor(this.state.data["5. Exchange Rate"])}</p>   
          <p>Last Refreshed - {this.state.data["6. Last Refreshed"]}</p>              
          <select className="custom-select col-3" onChange={this.change}>
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