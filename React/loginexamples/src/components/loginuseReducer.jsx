import React, { useReducer } from 'react'

// actions

const FIELD = 'FIELD'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

// Initial State 

const initialState = {
  username: '',
  password: '',
  error: '',
  isLoading: false,
  isLoggedIn: false
}

// reducer

const loginReducer = (state, action) => {
  switch (action.type) {
    case FIELD:
      return {
        ...state,
        [action.fieldName] : action.payload
      }
    case LOGIN:
      return {
        ...state,
        error: '',
        isLoading: true,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    case SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        isLoggedIn: true
      }
    case ERROR:
      return {
        ...state,
        error: `invalid username or password`,
        isLoading: false,
        isLoggedIn: false,
        username: '',
        password: ''
      }
  
    default:
      break;
  }
}

export default function LoginuseReducer() {

  const [state, dispatch] = useReducer(loginReducer, initialState)

  // obtain all variables from state

  const { username, password, error, isLoading, isLoggedIn} = state

  // submit

  const submit = async (e) => {
    e.preventDefault()
    dispatch({type: LOGIN})
    try {
      await function login({username, password}) {
        new Promise((resolve, reject) => {
          setTimeout( () => {
            if (username === 'admin' && password === 'admin') {
              resolve()
            } else {
              reject()
            }
          }, 2000)
        })
      }
      dispatch({type: SUCCESS})
    } catch (e) {
      dispatch({type: ERROR})
    }
  }

  const logout = () => {
    dispatch({type: LOGOUT})
  }

  return (
    
    <div className='App'>
      <div>
        {
          isLoggedIn
          ? (
            <div>
              <h1> Welcome, {username} </h1>
              <button onClick={logout}>
                log out
              </button>
            </div>
          )
          : (
            <form onSubmit={submit}>
              {
                error && <p style={{color: 'red'}}> {error} </p>
              }
              <input 
              type="text"
              placeholder='Username'
              value = {username}
              onChange = {(e) => {
                dispatch({
                  type: FIELD, 
                  fieldName:'username',
                  payload: e.currentTarget.value
                })
              }}
              />
              <input 
              type="password"
              placeholder='Password'
              value = {password}
              onChange = {(e) => {
                dispatch({
                  type: FIELD, 
                  fieldName:'password',
                  payload: e.currentTarget.value
                })
              }}
              />
              <button type='submit'>
                {isLoading 
                ? 'logging in ...'
                : 'login'}
              </button>

            </form>
          )
        }
      </div>
    </div>
  )
}
