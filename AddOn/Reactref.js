import React, { Component } from 'react'

export default class Reactref extends Component {
    constructor(props) {
      super(props)
    
      this.textref=React.createRef();
        this.focusinput=this.focusinput.bind(this);
      }
      focusinput(){
        this.textref.current.focus();
        alert(this.textref.current.value)
      }

  render() {
    return (
      <div>
      Text:<input type="text" ref={this.textref}/><br/>
      Button:<input type="button" value="Focus" onClick={this.focusinput}/>
      </div>
    )
  }
}
