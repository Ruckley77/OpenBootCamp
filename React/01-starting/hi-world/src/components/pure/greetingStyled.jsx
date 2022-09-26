import React, { useState } from 'react';

// defining styles in consts.

// style for logged user

const loggedStyle = {
  color: 'white'
}

// style for not logged user
const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold',
}

const GreetingStyled = (props) => {
  // generate a state for the component to control if its logged or not.
  const [logged, setLogged] = useState(false);

  const greetingUser = () => (<p> Hi, {props.name} </p>)
  const pleaseLogin = () => (<p> please login</p>)

  return (
    <div style={ logged ? loggedStyle : unloggedStyle}>
    {
      logged 
      ? 
      greetingUser()
      : 
      pleaseLogin()
    }
      <button onClick={() => {
      console.log("Button clicked")
      setLogged(!logged)}}>
        { logged ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default GreetingStyled;
