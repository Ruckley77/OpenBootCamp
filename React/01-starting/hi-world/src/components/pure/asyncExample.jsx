import React from 'react';

const AsyncExample = () => {

  async function generateNumber (){
    return 1;
  }

  async function generatePromiseNumber(){
    return Promise.resolve(2)
  }

  function obtainNumber(){
    generateNumber()
      .then((response) => alert(`response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  function obtainPromiseNumber(){
    generatePromiseNumber()
      .then((response) => alert(`response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`))
  }

  async function saveSessionStorage(key, value) {
    await sessionStorage.setItem(key, value)

    return Promise.resolve(sessionStorage.getItem(key))
  }

  function showStorage () {
    saveSessionStorage('name', 'martin')
      .then((response) => {
        let value = response
        alert(`saved name: ${value}`)
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => { console.log(`SUCCESS: Name saved and retrieved`)})
  }

  async function obtainMessage(){
    let promise = new Promise((resolve, reject) => {

      setTimeout(() => resolve('Hello world, this is resolve'), 2000)
    })

    let message = await promise

    await alert(`Message Received: ${message}`)
  }

  const returnError = async() => {
    await Promise.reject(new Error('Whoops'))
  }

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Everything is OK: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => console.log('Error Finally Executed'))
  }

  const urlNotFound = async() => {
    try {
      let response = await fetch('https://invalidURL')
      alert(`Response: ${JSON.stringify(response)}`)
    } catch (error) {
      alert(`Something went wrong with your URL: ${error} (check your console)`)
    }
  }


  const multiplePromises = async () => {
    let results = await Promise.all(
      [
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users?page=2')
      ]
    ).catch((error) => alert(`Something went wrong with your URLs: ${error} (check your console)`))
  }

  return (
    <div>
      <h1>Async / Promise Examples </h1>
      <button onClick={obtainNumber} >Obtain number </button>
      <button onClick={obtainPromiseNumber} > Obtain Promise number </button>
      <button onClick={showStorage} > Save Name and Show </button>
      <button onClick={obtainMessage} > Receive Message in 2 seconds </button>
      <button onClick={consumeError} > Obtain Error </button>
      <button onClick={urlNotFound} > Request to Unknown URL </button>
      <button onClick={multiplePromises} > Multiple Promises </button>
    </div>
  );
}

export default AsyncExample;
