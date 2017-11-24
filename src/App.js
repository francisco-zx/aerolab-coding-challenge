import React, { Component } from 'react';
import logo from './aerolab-logo.svg';
import herobg from './header-x2.png';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
//Components
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import ProductList from './components/products/ProductList';
import Points from './components/user/Points';
import History from './components/user/History';

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE0OWNlM2ViZGZiYzAwOWJmM2ZiNGIiLCJpYXQiOjE1MTEzMDAzMjN9.17dhtHyFGjQDYXCn7kPDtdv3VinZZE9QDs_X3Yhk40M';
localStorage.setItem('apiToken',token);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header logo={logo}/>
            <Route path="/" exact={true} component={ProductList} />
            <Route path="/user/points" exact={true} component={Points} />
            <Route path="/user/history" exact={true} component={History} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
