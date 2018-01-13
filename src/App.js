import React, { Component } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';

const REQUEST_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

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
