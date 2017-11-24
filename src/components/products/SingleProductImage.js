import React from 'react';

export default class SingleProduct extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            url: this.props.url
        }
    }

    render() {
        return (
            <img src={this.state.url} width="100%" height="auto"/>
        )
    }

}
