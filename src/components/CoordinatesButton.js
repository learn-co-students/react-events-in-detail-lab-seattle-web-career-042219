// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {
	handleClick = (ev) => {
		this.props.onReceiveCoordinates([ev.clientX, ev.clientY]);
	}

	render () {
		return (
			<button onClick={this.handleClick}>Click!</button>
		);
	}
}

export default CoordinatesButton