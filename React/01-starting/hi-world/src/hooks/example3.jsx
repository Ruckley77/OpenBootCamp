/*
- useState()
- useContext()
*/


import React, { useState, useContext} from 'react';

// Initialize an empty state that will be filled with parent's data.

const myContext = React.createContext(null)

export default function MyComponentWithContext() {

  const initialState = {
    token: "1234567",
    session: 1
  }

  // creating the state of this component
  const [sessionData, setSessionData] = useState(initialState)

  function updateSession(){
    setSessionData({
      token: "JWT123456789",
      session: sessionData.session + 1
    })
  }

  return (
    <myContext.Provider value={sessionData}>
    {/* Everything inside here can read the data from Session data */}
    {/* Also, if it updates, the components inside here, also update */}
    <h1> Example of useState() and useContext()</h1>
    <Component1></Component1>
    <button onClick={updateSession}> Update Session </button>
    </myContext.Provider>
  )
}



const Component1 = () => {

  // Component1 has a context that receives a value from it's parent.

  const state = useContext(myContext)

  return (
    <div>
      <h1>
        The Token is: {state.token}
      </h1>
      {/* We have Component 2 below */}
      <Component2></Component2>
    </div>    
  );
}  


const Component2 = () => {

  const state = useContext(myContext)

  return (
    <div>
      <h2>
        The session is: {state.session}
      </h2>
    </div>    
  );
}  

