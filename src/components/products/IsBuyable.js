import React from 'react';
import Coin from '../../icons/coin.svg';
import BuyWhite from '../../icons/buy-white.svg';
import BuyBlue from '../../icons/buy-blue.svg';

export default class IsBuyable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          'style':{
            'position': 'absolute',
            'top': 0,
            'right': 0,
            'padding': 12
          }
        }
    }

    render() {
        return (
          <div className="IsBuyable" style={this.state.style}>
            {
              this.props.user.points >= this.props.cost ?
              <div>
                <img
                  className="UserCoinsIcon animated fadeIn"
                  Style="animation-delay:0.5s;"
                  src={
                    this.props.hover ?
                    BuyWhite :
                    BuyBlue
                  }
                  width="42px"
                  height="42px"
                  alt=""
                  />
                </div> :
              <div
                className="IsNotBuyable animated fadeIn"
                Style="animation-delay:0.2s;margin-left:4px;">
                You need  {this.props.cost - this.props.user.points}
                <img
                  className="UserCoinsIcon animated fadeIn"
                  Style="animation-delay:0.5s;margin-left:4px;"
                  src={Coin}
                  width="24px"
                  height="24px"
                  alt=""
                />
              </div>
            }
          </div>
        )
    }
}
