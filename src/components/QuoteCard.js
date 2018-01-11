import React, { Component } from 'react';
import Button from './Button';

class QuoteCard extends Component {

  render() {
    return (
      <div className="quote-card">
        <div className="quote">
          <i className="fa fa-quote-left"></i>
          <div className="quote-text">You are always free to change your mind and choose a different future, or a different past.</div>
          <div className="quote-author">Richard Bach</div>
        </div>
      
        <div className="buttons">
          <Button />
        </div>
      </div>
    );
  }
}

export default QuoteCard;
