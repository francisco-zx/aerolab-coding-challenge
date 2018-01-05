import React from 'react';
import Coin from '../../icons/coin.svg';

//components

export default class Hero extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      index: this.props.index,
      id: this.props.id,
      name: this.props.name,
      cost: this.props.cost,
      category: this.props.category,
      img: this.props.img,
      date: this.props.date
    }
  };

  render() {
    return (
      <div key={this.state.index} id={this.state.id} className={"product" + this.state.index + " col-xs-12   animated fadeInUp"}
        Style={'animation-delay:' + 0.1*this.state.index + 's'}>
        <div className="SingleProduct text-left">
          <img src={this.state.img} className="col-md-4" />
          <div className="col-md-8">
            <hr className="col-xs-12"/>
            <div className="col-xs-12 col-md-8">
              <div className="ProductName">{this.props.name}</div>
              <small className="ProductCategory">{this.state.category}</small><br/>
              <small className="ProductCategory">{this.state.date}</small>
            </div>
            <div className="pull-right UserCoins col-md-4">
              <div className="UserCoinsNumber animated fadeIn">{this.state.cost}</div>
              <img className="UserCoinsIcon animated fadeIn" Style="animation-delay:0.5s" src={Coin} width="24px" height="24px"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
