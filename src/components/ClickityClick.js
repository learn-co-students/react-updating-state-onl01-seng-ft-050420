// Code ClickityClick Component Here
// Code ClickityClick Component Here
import React from "react";

class ClickityClick extends React.Component {
    constructor() {
      super();
   
      // Define the initial state:
      this.state = {
        hasBeenClicked: false,
        count: 1
      };
    }
   
    handleClick = () => {
        this.setState(previousState => {
          return {
            hasBeenClicked: !previousState.hasBeenClicked,
            count: previousState.count + 1
          }
        })
      }
   
    render() {
      return (
        <div>
          <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      );
    }
  }
   
  export default ClickityClick;