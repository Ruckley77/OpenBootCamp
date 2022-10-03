import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

  // function showMessage(text){
  //   alert(`Message Received ${text}`)
  // }

  // useState in order to change the initial value.
  const [name, setName] = useState("Juan");

  function updateName(newName){
    setName(newName)
  }

  return (
    <div style={{background: "tomato", padding: "10px"}}>
      {/* Father executes the function that is showing the message */}
      <Child name={name} update={updateName}></Child>
    </div>
  );
}

export default Father;
