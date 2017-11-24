import React from 'react';

export default class Hero extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      url: this.props.herobg,
      title: this.props.title
    }
  };



  render() {
    var heroBg ='background-image : url(' + this.state.url + ')'; 

    return (
      <div className="jumbotron Hero" Style={heroBg}>
        <div className="container">
          <h1 className="text-left HeroTitle animated fadeInUp">{this.state.title}</h1>
        </div>
      </div>
    );
  }
}
