import React, { useState } from 'react';

const LoginuseState = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [isloggedin, setIsloggedin] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setIsloading(true)
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
      setIsloggedin(true)
      setIsloading(false)
    } catch (error) {
      setError(`invalid username or password: ${error}`)
      setIsloading(false)
      setUsername('')
      setPassword('')
    }
  }

  const logout = () => {
    setIsloggedin(false)
    setIsloading(false)
  }

  return (
    <div className='App'>
      <div>
        {
          isloggedin
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
              onChange = {(e) => {setUsername(e.currentTarget.value)}}
              />
              <input 
              type="password"
              placeholder='Password'
              value = {password}
              onChange = {(e) => {setPassword(e.currentTarget.value)}}
              />
              <button type='submit'>
                {isloading 
                ? 'logging in ...'
                : 'login'}
              </button>

            </form>
          )
        }
      </div>
    </div>
  );
}

export default LoginuseState;
