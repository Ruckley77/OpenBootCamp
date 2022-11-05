import React, { useEffect, useState } from 'react';
import { getAllPagedUsers, getAllusers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [totalUsers, setTotalUsers] = useState(12);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState(2);


  useEffect(() => {
    obtainUsers()
  }, []);

  const obtainUsers = () => {
    getAllusers()
      .then((response) => {
        console.log('All Users:', response.data )
        setUsers(response.data)
        setTotalUsers(response.total)
        setUsersPerPage(response.per_page)
        setPages(response.total_pages)
      })
      .catch((error) => {
        alert(`Error while retrieving the users: ${error}`)
      })
      .finally(() => {
        console.log(`Finalized obtaining users:`);
        console.table(users);
      })
  }

  const obtainPageUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        console.log(`All users in Page ${page} :`, response.data )
        setUsers(response.data)
        setTotalUsers(response.total)
        setUsersPerPage(response.per_page)
        setPages(response.total_pages)
      })
      .catch((error) => {
        alert(`Error while retrieving the page: ${error}`)
      })
      .finally(() => {
        console.log(`Finalized obtaining page #: ${page}`);
      })
  }

  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((response) => {
        setSelectedUser(response.data)
      })
      .catch((error) => {
        alert(`Error while retrieving the user details: ${error}`)
      })
      .finally(() => {
        console.log(`Finalized obtaining usersDetails:`);
        console.table(selectedUser);
      })
  }

  const authUser = () => {
    login('eve.holt@reqres.in', 'cityslicka')
      .then((response) => {
        console.log('TOKEN', response.token);
        sessionStorage.setItem('token', response.token)
      })
      .catch( (error) => { 
        alert(`Error while logging in : ${error}`)
      })
      .finally(() => {
        console.log('Ended Login in. Navigate to home...')
      })
  }
    
  return (
    <div>
      {/* Login Button */}
      <button onClick={authUser} > Auth User </button>
      <h2>
        Users: 
      </h2>
      {users.map((user, index) => 
        (
          <p key={index} onClick={() => {obtainUserDetails(user.id)}}>
            {user.first_name} {user.last_name}
          </p>
        ))
      }
      <p>  Showing {usersPerPage} users of {totalUsers} in total </p>
      <button onClick={() => obtainPageUsers(1)} >
        1
      </button>
      <button onClick={() => obtainPageUsers(2)} >
        2
      </button>
      {selectedUser != null
      ? (
      <div>
        <h3>
          User Details 
        </h3>
          <div>
            <p> Name: {selectedUser.first_name} </p>
            <p> Lastname: {selectedUser.last_name} </p>
            <p> Email: {selectedUser.email} </p>
            <img src={selectedUser.avatar} alt="avatar" style={{height: '150px', width: '150px'}} />
          </div>
      </div>
        )
      : (
        <h6>Please click on a User to see it's details</h6>
        )
      }
    </div>
  );
}

export default FetchExample;
