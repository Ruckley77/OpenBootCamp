import React, { useState } from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {

  const [user, setUser] = useState(null);

  const obtainUser = () => {
    getRandomUser()
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.results[0])
        }
        console.log(response);
      })
      .catch((error) => {
        alert(`Something went wrong getting random user: ${error}`)
      })
  }

  return (
    <div>
      <h1> Axios Example </h1>
      {user != null
      ? (
        <div>
          <img src={user.picture.large} alt="avatar" />
          <h2> {user.name.title} {user.name.first} {user.name.last} </h2>
          <h3> {user.email} </h3>
          <button onClick={obtainUser} > Generate Random User </button>
        </div>
      )
      : (
        <div>
          <p> Generate a user by clicking below</p>
          <button onClick={obtainUser} > Random User </button>
        </div>
      )}
    </div>
  );
}

export default AxiosExample;
