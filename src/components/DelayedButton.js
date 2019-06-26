// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {


handleClick = (ev) => {
    ev.persist()
    setTimeout(() => {
        this.props.onDelayedClick(ev)
    }, this.props.delay)
}

render() {
    return(
    <div>
        <button onClick={this.handleClick}></button>
    </div>
    )
}

}