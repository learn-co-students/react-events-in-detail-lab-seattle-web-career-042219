// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createArray=(ev)=>{
    let positionArray = [ev.pageX, ev.pageY]
    this.props.onReceiveCoordinates(positionArray)
  }

  render(){
    return <button onClick = {this.createArray}>Create Coordinates</button>
  }



}
