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
      activeFilter: 0
    }
  };

  sortByRecent = () => {
    let recentProducts = this.state.recentProducts;
    this.setState({
      products: recentProducts,
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
    console.log(this.state.products);

  }

  sortByHighest = () => {
    this.setState({
      products: this.state.products.sort(function(a,b){
        return b.cost - a.cost;
      }),
      activeFilter: 2
    })
    console.log(this.state.products);

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
        console.log(this.state.recentProducts);
      });
  }

  render(){
    return(
      <div>
        <Hero title="Electronics" herobg={HeroProducts}/>
        <div className="container">
          <div className="FiltersBox animated fadeIn">
            <div className="ProductQuantity clearfix">{this.state.products.length ? this.state.products.length : '00'} of {this.state.products.length ? this.state.products.length : '00'} products</div>
            <div className="SortBy">Sort By:</div>
            <div className={this.state.activeFilter == 0 ? 'Filters active' : 'Filters' } onClick={this.sortByRecent}>Most Recent</div>
            <div className={this.state.activeFilter == 1 ? 'Filters active' : 'Filters' } onClick={this.sortByLowest}>Lowest Price</div>
            <div className={this.state.activeFilter == 2 ? 'Filters active' : 'Filters' } onClick={this.sortByHighest}>Highest Price</div>
          </div>
          <hr className="col-xs-12"/>
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
