import React, { Component } from 'react';
import logo from './aerolab-logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//Components
import User from './components/user/User';
import Header from './components/layout/Header';
import ProductList from './components/products/ProductList';
import Points from './components/user/Points';
import History from './components/user/History';

import { ToastContainer} from 'react-toastify';

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE0OWNlM2ViZGZiYzAwOWJmM2ZiNGIiLCJpYXQiOjE1MTEzMDAzMjN9.17dhtHyFGjQDYXCn7kPDtdv3VinZZE9QDs_X3Yhk40M';
localStorage.setItem('apiToken',token);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount(){
    fetch(
      'https://aerolab-challenge.now.sh/user/me',
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
    .then(user => {
      this.setState({
        user: user
      });
    })
  }

  render() {
    return (
      <div className="App">
        <User />
        <Router>
          <div>
            <Header logo={logo} user={this.state.user}/>
            <Route path="/" exact={true} render={()=><ProductList user={this.state.user}/>}/>
            <Route path="/user/points" exact={true} component={Points} />
            <Route path="/user/history" exact={true} component={History} />
          </div>
        </Router>
        <ToastContainer autoClose={5000}/>
      </div>
    );
  }
}

export default App;
