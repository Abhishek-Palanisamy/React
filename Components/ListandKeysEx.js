import React, { Component } from 'react'

export default class ListandKeysEx extends Component {
  render() {
    const Cars=[
        {model:"Nano",id:1},
        {model:"800",id:2}];
    return (
      <div><h2>{Cars.map((val)=><li key={val.id}>{val.model}</li>)}</h2></div>
    )
  }
}
