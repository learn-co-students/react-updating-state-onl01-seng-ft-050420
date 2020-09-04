// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {
    constructor() {
        super(); 

        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue'
        };
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true 
        }, () => console.log("This one is", this.state.hasBeenClicked))
        console.log("this is", this.state.hasBeenClicked)
    }

    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
    
}