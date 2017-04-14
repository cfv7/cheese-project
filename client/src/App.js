import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheeseList from './components/cheese-list';
import {getCheeses} from './actions'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getCheeses())
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cheeses</h2>
        </div>
        <p className="App-intro">
          Here's a list of some great British cheeses! 
        </p>
        <CheeseList />
      </div>
    );
  }
}


export default connect()(App)