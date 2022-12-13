import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div><h1>I am Student Class Component</h1>
      <h2>Dep:{this.props.dept}</h2></div>
    );
  }
}
