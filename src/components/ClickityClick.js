import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();
//at this point the intial state is false
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
     this.setState({
         hasBeenClicked: true
     }, () => console.log(this.state.hasBeenClicked)) // callback function implemented help us to access our new state afer it has been updated
    }//updates state when cllicked

    render() {
        return (
            <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
          </div>
        )
    }
}

export default ClickityClick;