import React from 'react';
import Coin from '../../icons/coin.svg';
import SingleProductRedeem from './SingleProductRedeem';

export default class IsBuyable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          'style': {
            'background-image': 'linear-gradient(-180deg, rgba(10, 212, 250, 0.8) 0%, rgba(37, 187, 241,0.8) 100%)',
            'width':'100%',
            'height':'100%',
            'position': 'absolute',
            'top': 0,
            'left': 0
          }
        }
    }

    render() {
        return (
          <div className="SingleProductHover" style={this.state.style}>
            <div className="SingleProductHoverContent text-center">
              <h3 className="SingleProductHoverCost animated fadeIn">{this.props.productCost}<img
                className="UserCoinsIcon animated fadeIn"
                src={Coin}
                width="48px"
                height="48px"
              /></h3>
              <SingleProductRedeem productId={this.props.productId} productName={this.props.productName}/>
            </div>
          </div>
        )
    }
}
