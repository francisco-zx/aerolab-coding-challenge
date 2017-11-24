import React from 'react';
import HeroPoints from '../../header-points-x1.png';
import Coins1000 from '../../coins/coins-1000.jpg';
import Coins5000 from '../../coins/coins-5000.jpg';
import Coins7500 from '../../coins/coins-7500.jpg';

//components
import Hero from '../layout/Hero';
import PointsProduct from './PointsProduct';


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
          <PointsProduct amount={1000} img={Coins1000}/>
          <PointsProduct amount={5000} img={Coins5000}/>
          <PointsProduct amount={7500} img={Coins7500}/>
        </div>
      </div>
    );
  }

}
