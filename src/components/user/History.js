import React from 'react';
import HeroHistory from '../../header-history-x1.png'

//components
import Hero from '../layout/Hero';
import Loader from '../layout/Loader';
import HistoryProduct from './HistoryProduct';

export default class History extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      history: {}
    }
  };

  componentWillMount(){
      fetch(
        'https://aerolab-challenge.now.sh/user/history',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.apiToken
          }
        }
      )
      .then(response => response.json())
      .then(history => {
        this.setState({
          history: history
        });
        console.log(this.state.history)
      });
  }

  render(){
    return(
      <div>
        <Hero title="Redeem History" herobg={HeroHistory}/>
        <div className="container">
          {
            this.state.history.length ?
            this.state.history.map((h, index) => {
                return (
                  <HistoryProduct
                    index={index + 1}
                    id={h._id}
                    name={h.name}
                    cost={h.cost}
                    category={h.category}
                    img={h.img.url}
                    date={h.createDate}
                  />
                )
            })
            :<Loader text="Loading History..." />
          }
        </div>
      </div>
    );
  }

}
