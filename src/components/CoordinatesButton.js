import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  clicked = event => {
    let x = event.clientX
    let y = event.clientY
    console.log(this)
    this.props.onReceiveCoordinates([x,y])
  }

  render(){
    return <button onClick={this.clicked}></button>
  }
}
