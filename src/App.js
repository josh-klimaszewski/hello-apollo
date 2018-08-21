import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Decrement from './components/Decrement'
import Increment from './components/Increment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <div>
          <Decrement />
          <Increment />
        </div>
      </div>
    );
  }
}

export default App;
