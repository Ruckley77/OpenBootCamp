/* Example of the following hooks: 
- useState() = update the state.
- useRef() = Reference elements inside the view
- useEffect() = Controls changes in the view

*/

import React, { useState, useRef, useEffect } from 'react';

const Example2 = () => {

  // create two different counters, each on a different state

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // create a reference with useRef() to link a variable with a DOM element.
  // instead of using Jquery and use getElementById, useRef it's used for that.

  const myRef = useRef()

  function increase1() {
    setCounter1(counter1 + 1)
  }

  function increase2() {
    setCounter2(counter2 + 1)
  }

  // Using useEffect


  // case 1 : Execute ALWAYS a code snippet.
  /* each time there is a change in the state of the component
  everything inside the useEffect() its executed.
  */

  // useEffect(() => {
  //   console.log("Change in the state of the component")
  //   console.log("Showing the reference DOM element");
  //   console.log(myRef)
  // })






  // case 2: Execute Only in some cases.
  // We will have it so it only executes when counter 1 changes.

  useEffect(() => {
    console.log("Change in the state of the component")
    console.log("Showing the reference DOM element");
    console.log(myRef)

  }, [counter1,counter2]);
  // [] can have many elements, so it will only change when those element change.

  return (
    <div>
      <h1> Example of useState(), useRef(), useEffect() </h1>
      <h2> Counter 1: {counter1} </h2>
      <h2> Counter 2: {counter2} </h2>
      {/* Referenced Element */}
      <h4 ref={myRef}>
        Example of referenced element
      </h4>
      {/* buttons to change counters */}
      <div>
        <button onClick={increase1}>Increase counter 1</button>
        <button onClick={increase2}>Increase counter 2</button>
      </div>
    </div>
  );
}

export default Example2;
