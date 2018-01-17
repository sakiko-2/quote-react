import React, { Component } from 'react';
import './App.css';
import QuoteCard from '../QuoteCard/QuoteCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quote Of The Day</h1>
        </header>     
        <QuoteCard />
      </div>
    );
  }
}

export default App;
