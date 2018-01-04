import React from 'react';

//components
import SingleProductImage from './SingleProductImage';
import SingleProductHover from './SingleProductHover';
import IsBuyable from './IsBuyable';
import User from '../user/User';


export default class SingleProduct extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            index: this.props.index,
            id: this.props.id,
            name: this.props.name,
            cost: this.props.cost,
            category: this.props.category,
            img: this.props.img,
            hover: false,
            user: this.props.user,
        }
    }

    mouseOut() {
    console.log('mouseout')
    this.setState({hover: false});
    }

    mouseOver() {
    console.log('mousein')
    this.setState({hover: true});
    }

    render() {
        return (
            <div
              key={this.state.index}
              id={this.state.id}
              className={"product" + this.state.index + " col-xs-12 col-sm-6 col-md-3  animated fadeIn"}
              >
              <div className="SingleProduct text-left" onMouseOver={() => this.mouseOver()} onMouseOut={() => this.mouseOut()}
              >
                <SingleProductImage url={this.state.img} />
                <hr />
                <small className="ProductCategory">{this.state.category}</small>
                <div className="ProductName">{this.props.name}</div>
                <IsBuyable cost={this.state.cost} hover={this.state.hover} user={this.props.user}/>
                  {
                    this.state.cost <= this.state.user.points ?
                    <SingleProductHover productId={this.state.id} productCost={this.state.cost}/> :
                    ''
                  }
              </div>
            </div>
        )
    }

}
