import React from 'react'

export default function Message(props) {
  return (
    <div><h1>I am message component</h1>
    <h2>Name: {props.name}</h2>
    <h2>Age: {props.age}</h2></div>
  )
}
