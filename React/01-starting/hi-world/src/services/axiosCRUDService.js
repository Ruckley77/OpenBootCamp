import axios from 'axios';


/*
login method to ReqRes endpoint 
@param {string} = email
@param {string} = password
*/
export const login = (email,password) => {

  let body = {
    email: email,
    password: password
  }

  // returns the response with a Promise
  return axios.post('https://reqres.in/api/login', body)

}

// get all users from request http
export const getAllUsers = () => {
  return axios.get('https://reqres.in/api/users')

}

// get all page users
export const getAllPageUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`)

}

// get user by id
export const getUserById = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`)

}

// Create User

export const createUser = (name, job) => {
  let body = {
    name: name,
    job: job
  }
  
  return axios.post('https://reqres.in/api/users', body)
}

// Update user

export const updateUser = (name, job, id) => {
  let body = {
    name: name,
    job: job
  }
  
  return axios.put(`https://reqres.in/api/users/${id}`, body)
}

// Delete User

export const deleteUser = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`)

}