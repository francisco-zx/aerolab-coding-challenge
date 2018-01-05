import React from 'react';


//components
import Hero from '../layout/Hero';
import HeroProducts from '../../header-x1.png'
import Loader from '../layout/Loader';
import SingleProduct from './SingleProduct';


export default class ProductList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      products: {},
      imageStatus: 'loading',
      recentProducts: {},
      activeFilter: null
    }
  };

  sortByRecent = () => {
    let recentProducts = this.state.recentProducts;
    console.log(recentProducts);
    this.setState({
      products: this.state.products.sort(function(a,b){
        return b.id - a.id;
      }),
      activeFilter: 0
    })
  }

  sortByLowest = () => {
    this.setState({
      products: this.state.products.sort(function(a,b){
        return a.cost - b.cost;
      }),
      activeFilter: 1
    })
  }

  sortByHighest = () => {
    this.setState({
      products: this.state.products.sort(function(a,b){
        return b.cost - a.cost;
      }),
      activeFilter: 2
    })
  }

  componentWillMount(){
      fetch(
        'https://aerolab-challenge.now.sh/products',
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
      .then(products => {
        this.setState({
          products: products,
          recentProducts: products
        })
      });
  }

  render(){
    return(
      <div>
        <Hero title="Electronics" herobg={HeroProducts}/>
        <div className="container">
          {
            this.state.products.length ?
            <div className="FiltersBox animated fadeIn">
              <div className="ProductQuantity clearfix">{this.state.products.length ? this.state.products.length : '00'} of {this.state.products.length ? this.state.products.length : '00'} products</div>
              <div className="SortBy">Sort By:</div>
              <div className={this.state.activeFilter === 0 ? 'Filters active' : 'Filters' } onClick={this.sortByRecent}>Most Recent</div>
              <div className={this.state.activeFilter === 1 ? 'Filters active' : 'Filters' } onClick={this.sortByLowest}>Lowest Price</div>
              <div className={this.state.activeFilter === 2 ? 'Filters active' : 'Filters' } onClick={this.sortByHighest}>Highest Price</div>
              <hr className="col-xs-12"/>
            </div>

            :''
          }
          <div className="ProductList">
          {
          this.state.products.length ?
          this.state.products.map((p, index) => {
              return (
                <SingleProduct
                    key={p._id}
                    index={index + 1}
                    id={p._id}
                    name={p.name}
                    cost={p.cost}
                    category={p.category}
                    img={p.img.url}
                    user={this.props.user}
                    updateUser={this.props.updateUser}
                />
              )
          })
          :<Loader text="Retrieving Products..."/>
          }
          </div>
        </div>
      </div>
    );
  }

}
