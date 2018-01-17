import React, { Component } from 'react';
import axios from 'axios'
import Button from '../Button/Button';
import './QuoteCard.css';

const REQUEST_URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat='

const request = {
  method: 'GET',
  headers: {
    'X-Mashape-Key': '${yourKey}',
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

class QuoteCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      loaded: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(REQUEST_URL, request)
      .then((response) => {
        const quotes = response.data;
        console.log(quotes);
        this.setState({dataSource: quotes})
      })
  }

  handleClick() {
    this.fetchData();
  }

  render() {
    return (
      <div className="quote-card">
        <div className="quote">
          <div className="quote-top">
            <i className="fa fa-quote-left"></i>
          </div>
          <div className="quote-text">{this.state.dataSource.quote}</div>
          <div className="quote-bottom">
            <Button handleClick={this.handleClick}/>
            <div className="quote-author">{this.state.dataSource.author}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteCard;
