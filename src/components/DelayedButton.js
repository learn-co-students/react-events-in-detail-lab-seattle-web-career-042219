// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {
	handleClick = (ev) => {
		ev.persist();
		
		setTimeout(() => {
      		this.props.onDelayedClick(ev);
    	}, this.props.delay);
	}

	render () {
		return (
			<button onClick={this.handleClick}>Delayed Click!</button>
		);
	}
}

export default DelayedButton