import React from 'react';
import Coin from '../../icons/coin.svg';
import BuyWhite from '../../icons/buy-white.svg';
import BuyBlue from '../../icons/buy-blue.svg';

export default class IsBuyable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          'user': '',
          'style':{
            'position': 'absolute',
            'top': 0,
            'right': 0,
            'padding': 12
          },
          'neededpoints': 0
        }
    }

    componentWillMount(){
      fetch(
        'https://aerolab-challenge.now.sh/user/me',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.apiToken
          }
        }
      )
      .then(response => response.json())
      .then(user => {
        this.setState({
          user: user
        })
      });
    }

    render() {
        return (
          <div className="IsBuyable" style={this.state.style}>
            {
              this.state.user.points >= this.props.cost ?
              <div><img className="UserCoinsIcon animated fadeIn" Style="animation-delay:0.5s;" src={BuyBlue} width="42px" height="42px"/></div> :
              <div className="IsNotBuyable">You need {
                this.props.cost - this.state.user.points
              }
                <img className="UserCoinsIcon animated fadeIn" Style="animation-delay:0.5s;margin-left:4px;" src={Coin} width="24px" height="24px"/></div>
            }
          </div>
        )
    }
}
