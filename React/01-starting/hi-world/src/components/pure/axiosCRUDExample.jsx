import React from 'react';
import { createUser, deleteUser, getAllPageUsers, getAllUsers, getUserById, login, updateUser } from '../../services/axiosCRUDService';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email Is Required"),
    password: Yup.string()
      .required("Password is Required")
  }
)

const AxiosCRUDExample = () => {

  const initialCredentials = {
    email: "",
    password: ""
  }

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data))
          sessionStorage.setItem('token', response.data.token)
        } else {
          sessionStorage.removeItem('token')
          throw new Error('Login failure')
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`)
        sessionStorage.removeItem('token')
      })
      .finally(() => {
        console.log('Login done')
      })
  }

  //CRUD examples

  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        if(response.status === 200){
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error('User not found')
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`)
      })

  }

  const  obtainAllPageUsers = (page) => {
    getAllPageUsers(page)
      .then((response) => {
        if(response.status === 200){
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error(`User not found(page#: ${page})`)
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`)
      })
  }

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        if (response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error(`User not Found with id: ${id}`)
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`)
      })
  }

  //CRUD
  // Create
  const createNewUser = (name, job) => {
    createUser(name, job)
    .then((response) => {
      if(response.status === 201){
        alert(JSON.stringify(response.data))
      } else {
        throw new Error('User not created')
      }
    })
    .catch((error) => {
      alert(`Something went wrong: ${error}`)
    })
  }

// Update
const updateUserById = (name, job, id) => {
  updateUser(name, job, id)
    .then((response) => {
      if (response.status === 200) {
        alert(JSON.stringify(response.data))
        alert(`User updated successfully with id: ${id}`)
      } else {
        throw new Error(`User not updated with id: ${id}`)
      }
    })
    .catch((error) => {
      alert(`Something went wrong: ${error}`)
    })
}
// Delete
const deleteUserById = (id) => {
  deleteUser(id)
    .then((response) => {
      if (response.status === 204) {
        alert(JSON.stringify(response.data))
        alert(`User Deleted Successfully with id: ${id}`)
      } else {
        throw new Error(`User not deleted with id: ${id}`)
      }
    })
    .catch((error) => {
      alert(`Something went wrong: ${error}`)
    })
}

  return (
    <div>
      <h4> Login Formik </h4>
      <Formik 

        // * Initial Values that the Form will take
        initialValues = {initialCredentials}
        // * Yup Validation Schema
        validationSchema = {loginSchema}

        // * onSubmit Event
        onSubmit = {async (values) => {
          authUser(values)
        }}>

            {({errors, touched, isSubmitting}) => (
              <Form>
                <label htmlFor="email">Email</label>
                <Field id="email" type="email" name="email" placeholder="example@example.com" />

                {/* Email Errors */}
                {
                  errors.email && touched.email && 
                  (
                      <ErrorMessage name="email" component="div"/>
                  )
                }

                <label htmlFor="password">Password</label>
                <Field id="password" type="password" name="password" placeholder="Password" />

                {/* Password Errors */}
                {
                  errors.password && touched.password && 
                  (
                    <div className='error'>
                      <p> {errors.password} </p>
                    </div>
                  )
                }

                <button type='submit'>Submit</button>

                {isSubmitting ? (<p> Login your credentials ...</p>) : null}

              </Form>
            )}
      </Formik>
      {/* Example buttons to test API Responses */}
      <div>
        <button onClick={obtainAllUsers} > 
          Get All Users with Axios  
        </button>
        <button onClick={() => { obtainAllPageUsers(1) }} > 
          Get All Page(1) Users with Axios 
        </button>
        <button onClick={() => { obtainUserById(1)}} >
          Get user by id(1)
        </button>
        {/* CRUD buttons */}
          {/* Create */}
          <button onClick={() => { createNewUser('Harry', 'Magician') }} > 
            Create new User
          </button>
          <button onClick={() => { updateUserById('Harry', 'Dev', 1) }} >
            Update User
          </button>
          <button onClick={() => { deleteUserById(1) }} >
            Delete
          </button>
      </div>
    </div>
  )
}

export default AxiosCRUDExample;
