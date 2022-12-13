import React, { Component } from 'react'
import Encomponent from './Hoc.js'

class HoverCounter extends Component {
  render() {
    const{count,inc}=this.props
    return (
      <div>
      <h3 onMouseEnter={inc}>Hover{count}</h3>
      </div>
    )
  }
}
export default Encomponent(HoverCounter);