import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const cb = () => { this.props.colorSwitch(str) }
      //we get access to str value by putting this cb inside of the map- now it will run
      return <div key={idx} className="color-swatch" onClick={cb} style={{backgroundColor: str}} />
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
