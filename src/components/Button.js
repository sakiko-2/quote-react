import React, { Component } from 'react';
import QuoteCard from './QuoteCard';

class Button extends Component {
  constructor(props) {
    super(props)
  }

  click = () => {
    this.props.handleClick();
  }

  render() {
  
    return (
      <div className="buttons">
        <button className="btn" id="new-quote" type="button" onClick={this.click}>
          <i className="fa fa-repeat fa-5x" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default Button;
