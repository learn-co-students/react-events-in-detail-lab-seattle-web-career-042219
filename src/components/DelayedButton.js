// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
    
    clickHandler = (ev) => {
        ev.persist()
        this.props.onDelayedClick(ev, this.props.delay )
    }

    render() {
        return (
            <button onClick={this.clickHandler}> Coord </button>
        )
    }
}

export default DelayedButton;
