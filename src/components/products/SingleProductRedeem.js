import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default class IsBuyable extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }


    redeem = () => {
      fetch('https://aerolab-challenge.now.sh/redeem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.apiToken
        },
        body: JSON.stringify({'productId': this.props.productId})
      }).then(res=>res.json())
        .then(res => console.log(res))
        .then(res => toast(this.props.productName + ' succesfully redeemed 😎'))
        .then(res => this.props.updateUser());
    }



    render() {
        return (
          <div>
            <button className="redeem btn" onClick={this.redeem}>Redeem Now!</button>
          </div>

        )
    }
}
