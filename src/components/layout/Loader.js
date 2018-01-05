import React from 'react';
import logo from '../../aerolab-logo.svg';

export default class Loader extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: {}
    }
  };

  render() {
    return (
      <div className="">
        <img src={logo} width="100px" className="animated infinite bounce Loader" alt=""/>
        <h3 className="LoaderText">{this.props.text}</h3>
      </div>
    );
  }
}
