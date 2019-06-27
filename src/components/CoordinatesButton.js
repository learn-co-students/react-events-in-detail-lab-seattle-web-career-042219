import React from 'react'

export default class CoordinatesButton extends React.Component{
 
    handleClick = event =>{
        const coordArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordArray)
    }
    render() {
        return(
            <button onClick={this.handleClick}>Click Me</button>
        )
    }
}
