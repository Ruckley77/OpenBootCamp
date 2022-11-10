import React, { useReducer, useContext } from 'react';

// Actions

const increment = 'increment'
const decrement = 'decrement'
const reset = 'reset'

const myContext = React.createContext(null)

const Points = () => {
  const state = useContext(myContext)

  return (
    <p> Points: {state.count} </p>
  )
}

const Counter = () => {

  // Initial state for Reducer
  const initialState = {
    count: 0
  }

  // Reducer to change State

  const reducer = (state, action) => {
    switch (action.type) {
      case increment:
        return {
          count: state.count + action.payload.quantity
        }
      case decrement:
        return {
          count: state.count - action.payload.quantity
        }
      case reset:
        return {
          count: 0
        }
      default:
        return state
    }
  }

  // assign useReducer to state, reducer and dispatch actions

  const [state, dispatch] = useReducer(reducer, initialState)

  const dispatchIncrement = () => {
    dispatch({
      type: increment,
      payload: {
        quantity: 1
      }
    })
  }

  const dispatchDecrement = () => {
    dispatch({
      type: decrement,
      payload: {
        quantity: 1
      }
    })
  }

  const dispatchReset = () => {
    dispatch({type: reset})
  }

  return (
    <myContext.Provider value={state}>
      <div>
        <Points></Points>
        <button 
        onClick={dispatchIncrement}> + 
        </button>

        <button 
        onClick={dispatchDecrement}> - 
        </button>

        <button 
        onClick={dispatchReset}> Reset 
        </button>
        
      </div>
    </myContext.Provider>
  );
}

export default Counter;
