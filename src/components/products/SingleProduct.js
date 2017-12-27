import React from 'react';

//components
import SingleProductImage from './SingleProductImage';
import IsBuyable from './IsBuyable';

export default class SingleProduct extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            index: this.props.index,
            id: this.props.id,
            name: this.props.name,
            cost: this.props.cost,
            category: this.props.category,
            img: this.props.img
        }
    }

    render() {
        return (
            <div key={this.state.index} id={this.state.id} className={"product" + this.state.index + " col-xs-12 col-sm-6 col-md-3  animated fadeInUp"}
              Style={'animation-delay:' + 0.1*this.state.index + 's'}>
              <div className="SingleProduct text-left">
                <SingleProductImage url={this.state.img}/>
                <hr />
                <small className="ProductCategory">{this.state.category}</small>
                <div className="ProductName">{this.props.name}</div>
                <IsBuyable cost={this.state.cost}/>
              </div>
            </div>
        )
    }

}
