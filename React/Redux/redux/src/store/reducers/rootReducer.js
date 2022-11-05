import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todoReducer } from "./todoReducer";



export const rootReducer = combineReducers (
  (
    {
      // state name: reducer that will control it
      todoState: todoReducer,
      filterState: filterReducer
      // ... add more states and reducers to include them in the store
    }
  ) 
)