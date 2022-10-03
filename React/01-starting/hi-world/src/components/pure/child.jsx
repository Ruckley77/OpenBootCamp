import React, { useRef } from 'react';

// "update" is the name of the prop we have defined, look at <child> in father.jsx. Once we have the prop here in the child, we then define our own functions 
const Child = ({ name, send, update }) => {


  // const messageRef = useRef("")


  // ? using useRef to have a constant with a HTML ref value.

  const nameRef = useRef("")

  // function pressButton(){
  //   const text = messageRef.current.value
  //   alert(`Text in input: ${text}`)
  // }

  // function pressButtonParams(text){
  //   alert(`Text: ${text}`)
  // }


  // ? creating a function that will receive 1 parameter, the parameter once submited will prevent the page to reload because it will be used in the form (forms submitted will reload page by default)

  function submitName(e){
    e.preventDefault()

    //
    update(nameRef.current.value)
  }

  return (
    <div style={{background: "cyan", padding:"30px"}}>
    <p onMouseOver={() => console.log("On Mouse Over")}>Hello, {name}</p>
    {/* <button onClick={() => console.log("Button 1 Pressed")}>Button 1</button>
    <button onClick={pressButton}>Button 2</button>
    <button onClick={() => pressButtonParams("Hello")}>Button 3</button>
    <input placeholder="Send a text to your father" 
    onFocus={() => console.log("Input focused")} 
    onChange={(e) => console.log("Input Changed:", e.target.value)}
    onCopy={() => console.log("Copied text from input")}
    ref={messageRef}
    />
    <button onClick={()=> send(messageRef.current.value)}>
      Send Message
    </button> */}
      <div style={{marginTop: "20px"}}>
        <form onSubmit={submitName}>
          <input  ref={nameRef} placeholder="New Name" />
          <button type='submit'> Update Name </button>
        </form>
      </div>
    </div>
  );
}

export default Child;
