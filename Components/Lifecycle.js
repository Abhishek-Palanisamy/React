import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log('component initialized')
        this.state={msg:"hello"};
        this.changeState=this.changeState.bind(this)
    }
  render() {
    return (
      <div>Lifecycle</div>
    )
  }
}
