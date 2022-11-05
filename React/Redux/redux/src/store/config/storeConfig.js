import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "../reducers/rootReducer"

export const AppStore = () => {
  // store uses configureStore Method, that brings the reducers/states which is root reducer.
  let store = configureStore({
    reducer: rootReducer,
    devTools: composeWithDevTools
  })
  return store
}