// initial state

import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

let initialState = []

export const todoReducer = (state = initialState, action) => {

  // switch case for the todo's
  switch (action.type) {
    case ADD_TODO:
      return ([
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ])
    case TOGGLE_TODO:
      return state.map((todo) => (
        todo.id === action.payload.id
      )
      ? {
        ...todo,
        completed: !todo.completed
      }
      : todo
      )
  
    default:
      return state
  }
}