import React, { Component } from 'react'

export class ClickityClick extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        toggled: !previousState.toggled
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggled
           ? 'ON'
           : 'OFF'}
        </button>
      </div>
    );
  }
}

export default ClickityClick

