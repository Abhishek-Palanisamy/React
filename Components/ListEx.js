import React from 'react'

export default function ListEx(){
  
    const Cars=["Nano ","BMW ","Scorpio"]
    //const listCars=Cars.map((i)=>i)} ;
    
    return (
      <div>
      
      <h2>{Cars.map((i)=>i)}</h2></div>
    )
  }

