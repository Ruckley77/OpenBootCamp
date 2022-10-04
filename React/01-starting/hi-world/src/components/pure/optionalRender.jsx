import React, {useState} from 'react';



// login / logout buttons

const LoginButton = ({loginprop, Styleprop}) => {
  return (
    <button style={Styleprop} onClick={loginprop}>Login</button>
  )
}
const LogoutButton = ({logoutprop, Styleprop}) => {
  return (
    <button style={Styleprop} onClick={logoutprop}>Logout</button>
  )
}


// ? (expression true) && expresion => expresion is rendered
// ? (expression false) && expresion => expresion is not rendered


const loggedStyle = {
  backgroundColor: 'green',
  color: 'white'
}

// style for not logged user
const unloggedStyle = {
  backgroundColor: 'tomato',
  color: 'white',
  fontWeight: 'bold',
}

const OptionalRender = () => {

  const [access, setAccess] = useState(false);
  const [messagesnumber, setMessagesnumber] = useState(0);
  // const updateAccess = () => {
  //   setAccess(!access)
  // }

  const loginAction = () => {
    setAccess(true)
  }

  const logoutAction = () => {
    setAccess(false)
  }

  let logButton

  // if(access) {
  //   logButton = <button onClick={updateAccess}>Logout</button>
  // } else { 
  //   logButton = <button onClick={updateAccess}>Login</button>
  // }

  if(access) {
    logButton = <LogoutButton logoutprop={logoutAction} Styleprop={unloggedStyle} ></LogoutButton>
  } 
  else { 
    logButton = <LoginButton loginprop={loginAction} Styleprop={loggedStyle}></LoginButton>
  }


  let addMessages = () => {
    setMessagesnumber(messagesnumber + 1)
  }





  return (
    <div>
      { logButton }
      {/* {messagesnumber > 0 && messagesnumber === 1 && <p> You have {messagesnumber} new message... </p>}
      {messagesnumber > 1 && <p> You have {messagesnumber} new messages... </p>}
      {messagesnumber === 0 && <p> There are no new messages </p> } */}

      { access 
      ? (
        <div>
          {messagesnumber > 0
          ? <p>You have {messagesnumber} new message{messagesnumber > 1 
            ? "s ..." 
            : null } </p>
          : <p>You have no new messages </p> }
          <button onClick={addMessages}> Add message </button>
        </div>
      )
      
      : null}
    </div>
  );
}

export default OptionalRender;
