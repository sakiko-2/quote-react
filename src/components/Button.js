import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className="btn" id="new-quote" type="submit">
        <i className="fa fa-repeat fa-lg" aria-hidden="true"></i>
      </button>
    )
  }
}

export default Button;