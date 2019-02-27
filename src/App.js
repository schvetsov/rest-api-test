import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    data: ''
  }
}

componentDidMount() {

  //fetch get request
  
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => 
  //   this.setState({
  //     data: json
  //   })
  // )

  //axios get request

  Axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then( res => {
    this.setState({
      data: res.data
    })
    console.log(res.data)
    Axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then( res => {
      console.log(res.data.title)
    })
    .catch(err => {
      console.log(err);
    })
  })
  .catch(err => {
    console.log(err);
  })

}

  render() {
    const items = Object.keys(this.state.data).map(i => 
      <li key={i}>{this.state.data[i]}</li>);
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default App;
