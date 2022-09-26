/*
  Using Did Mount both in Class and Function type.
*/

//Class

import React, { Component, useEffect } from 'react'

export class DidMountHook extends Component {

  componentDidMount(){  // in class we need to use the function that is already defined as componentDidMount
    console.log("Component Did Mount: Before it is added to the DOM (rendered)");
  }

  render() {
    return (
      <div>
        <h1>DidMountHook</h1>
      </div>
    )
  }
}


export const DidmountHook = () => {

  useEffect(() => {  // with functions we dont need to use componentDidMount, we use the useEffect.
    console.log("Component Did Mount: Before it is added to the DOM (rendered)");
  }, []) //[] empty means it will execute only once, not every single time
  return ( 
    <div>
      <h1>DidMountHook</h1>
    </div>
  );
}
