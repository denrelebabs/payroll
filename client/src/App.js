
import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar'
import './App.css';

class App extends Component {

  state = {
    apiResponse: []
  }
  

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => {this.setState({ apiResponse: res });
      console.log(res)});
}

componentWillMount() {
    this.callAPI();
}


  render() {
    return (
      <div className="App">
      
      <Navbar/>
      <p className="App-intro">{this.state.apiResponse}</p>
  
  </div>
    );
  }
}

export default App;
