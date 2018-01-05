import React from 'react';
import {Link} from 'react-router-dom';
import Coin from '../../icons/coin.svg';


export default class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      user: this.props.user
    }
  };


  render(){
    return(
      <div className="App-header">
        <div className="text-left col-xs-6 aeroLogo">
          <Link to="/">
            <img src={this.props.logo} className="App-logo animated fadeIn" alt="logo" />
          </Link>
        </div>
        {
          this.props.user.name ?
          <div className="text-right col-xs-6 CurrentUser animated fadeIn">
            <div className="UserName text-right col-xs-hidden col-md-9 col-sm-8 animated fadeIn">{this.props.user.name}</div>
            <div className="dropdown">
              <a href="" className="UserCoins col-md-3 col-sm-4 dropdown-toggle" data-toggle="dropdown">
                <div className="UserCoinsNumber animated fadeIn" Style="animation-delay:0.3s">{this.props.user.points}</div>
                <img className="UserCoinsIcon animated fadeIn" Style="animation-delay:0.5s" src={Coin} width="24px" height="24px" alt=""/>
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/user/history">History</Link></li>
                <li><Link to="/user/points">Points</Link></li>
                <li className="divider"></li>
                <li><a href="">Log Out</a></li>
              </ul>
            </div>
          </div>
          :''
        }

      </div>
    )
  }
}
