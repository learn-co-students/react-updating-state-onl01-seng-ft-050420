import React from 'react';
import { render } from 'react-dom';

class ClickityClick extends React.Component {
    constructor(){
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
    };

    render(){
        return (
            <div>
                <p>I have {this.state.toggled ? 'ON' : 'OFF' } been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick;
