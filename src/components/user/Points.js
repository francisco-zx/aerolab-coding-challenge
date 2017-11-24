import React from 'react';
import HeroPoints from '../../header-points-x1.png';

//components
import LoadingBar from 'react-redux-loading-bar';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import Hero from '../layout/Hero';


export default class Points extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    }
  };

  buy = () => {
    fetch('https://aerolab-challenge.now.sh/user/points', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.apiToken
      },
      body: {
        "amount": 1000
      }
    }).then(data => {
      console.log(data);
    })
  }

  render(){
    return(
      <div>
        <Hero title="Redeem Points" herobg={HeroPoints}/>
        <div className="container">
          <a className="btn btn-success" onClick={(amount) => this.buy()}>1000</a>
          <a className="btn btn-success">5000</a>
          <a className="btn btn-success">7500</a>
        </div>
      </div>
    );
  }

}
