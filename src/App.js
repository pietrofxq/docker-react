import React, { Component } from 'react';
import doggo from './doggo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={doggo} className="App-logo" alt="logo" />
          <p>
            First app deployed on aws!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
