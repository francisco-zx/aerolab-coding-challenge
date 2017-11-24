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
      imageStatus: 'loading'
    }
  };

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
          products: products
        })
        console.log(this.state.products);
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
            <div className="Filters active">Most Recent</div>
            <div className="Filters">Lowest Price</div>
            <div className="Filters">Highest Price</div>
          </div>
          <hr className="col-xs-12"/>
          <div class="ProductList">
          {
          this.state.products.length ?
          this.state.products.map((p, index) => {
              return (
                <SingleProduct
                    index={index + 1}
                    id={p._id}
                    name={p.name}
                    cost={p.cost}
                    category={p.category}
                    img={p.img.url}
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
