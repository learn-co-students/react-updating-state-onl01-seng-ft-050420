import React from "react";

export default class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
    };
  }
  handleClick = () => {
    this.setState((previousState) => {
      return { hasBeenClicked: !previousState.hasBeenClicked };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.hasBeenClicked ? "On" : "Off"}
        </button>
      </div>
    );
  }
}
