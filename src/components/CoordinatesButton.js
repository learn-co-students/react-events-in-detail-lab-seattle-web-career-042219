// Code CoordinatesButton Component Here
import React, { Component } from 'react';



class CoordinatesButton extends Component {

    clickHandler = (ev) => {
        this.props.onReceiveCoordinates([ev.clientX,ev.clientY])
    }

    render() {
        return (
            <button onClick={this.clickHandler}> Coord </button>
        )
    }
}



export default CoordinatesButton;
