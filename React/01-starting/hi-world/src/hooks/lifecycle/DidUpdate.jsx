/*
  componentDidUpdate with class and function types.
*/


import React, { Component, useEffect } from 'react'

export class componentDidUpdate extends Component {

    componentDidUpdate(){
      console.log("Component Did Update: When receives new props or change in its private state.");
    }
    
    render() {
      return (
        <div>
          <h1>Did Update</h1>
        </div>
    )
  }
}


export const ComponentdidUpdate = () => {
  
  useEffect(() => {
    console.log("Component Did Update: When receives new props or change in its private state.");
  });

  return (
    <div>
      <h1>Did Update</h1>
    </div>
  );
}
