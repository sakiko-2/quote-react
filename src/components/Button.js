import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="btn" id="new-quote" type="button" onClick={this.handleClick}>
          <i className="fa fa-repeat fa-5x" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default Button;
