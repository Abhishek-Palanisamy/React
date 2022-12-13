import React, { Component } from 'react'
import Encomponent from './Hoc.js'

class ClickCounter extends Component {
  render() {
    return (
      <>
      {this.props.name}
      <button onClick={this.props.inc}>Click{this.props.count}</button>
      </>
    )
  }
}
export default Encomponent(ClickCounter)