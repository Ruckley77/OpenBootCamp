// Examples of the use of useState
// Create a component with a function stype
// access its private state through a hook and also, modify it.

import React, { useState } from 'react';

const Example1 = () => {

  //Initial value for a counter
  const initialValue = 0
  // Initial value for a person
  const initialPerson = {
    name : "Juan",
    email : "marulo77@Hotmail.com"
  }

  // We want that the initialValue and initialPerson are part of the state of the component.
  // So we can manage the change and it will be reflected in the component view.

  //const [nameVariable, FunctionToChange] = useState(initial value)

  const [counter, setCounter] = useState(initialValue)
  const [person, setPerson] = useState(initialPerson)

  // Function to update the private state of the counter
  function incrementCounter() {
    // functionToChange(new value)
    setCounter(counter + 1)
  }

  //Function to update the state of person in the component.
  function updatePerson() {
    setPerson({
      name: "Pepe",
      email: "pepe@gmail.com"
    })
  }
  return (
    <div>
      <h1> Example of useState() hook </h1>
      <h2> Counter: {counter} </h2>
      <h2> Person Details </h2>
      <h3> Name: {person.name} </h3>
      <h3> Email: {person.email} </h3>

      <div>
        <button onClick={incrementCounter}>Increase Counter</button>
        <button onClick={updatePerson}>Update Person</button>
      </div>

    </div>
  );
}

export default Example1;
