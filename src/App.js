import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    texto: "",
    counter: 0
  }
  handler = ({target}) => {
    const {name, value} = target
    // console.log(name)
    // console.log(value)
    // console.log(value.length)
    this.setState({counter: value.length})

  }
  render() {
    return (
      <div className="container">
        <textarea name="texto" rows="3" onChange={this.handler}></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
