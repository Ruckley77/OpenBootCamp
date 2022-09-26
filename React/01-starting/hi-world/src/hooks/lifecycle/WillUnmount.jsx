/*
  componentWillUnmount with class types and function
*/

import React, { Component } from 'react'

export class ComponentWillUnmount extends Component {

  componentWillUnmount(){
    console.log("Component Will Unmount: Before it disappears")
  }
  
  render() {
    return (
      <h1>ComponentWillUnmount</h1>
      )
    }
  }
  
  export const ComponentwillUnmount = () => {

    useEffect(() => {
      //any event could be here but for now we do nothing
      return () => {
        console.log("Component Will Unmount: Before it disappears")
      };
    }, [])
    return (
    <div>
      <h1>ComponentWillUnmount</h1>
    </div>
  );
}

