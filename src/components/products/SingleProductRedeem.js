import React from 'react';

export default class IsBuyable extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    redeem = () => {
      fetch('https://aerolab-challenge.now.sh/redeem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.apiToken
        },
        body:{
          "productId": this.props.productId
        }
      })

    }

    render() {
        return (
          <button className="redeem btn" onClick={this.redeem}>Redeem Now!</button>

        )
    }
}
