import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

// Yup schema. 
const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email Is Required"),
    password: Yup.string()
      .required("Password is Required")
  }
)

const LoginFormik = () => {

  const initialCredentials = {
    email: "",
    password: ""
  }

  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  const goToProfile = () => {
    navigate('/profile')
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
        onSubmit = { async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))

          // We save the data in the localStorage
          await localStorage.setItem("credentials", values)
          goToProfile()
        }}>

          {/* We obtain props from Formik */}

          {/* {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
            } = props 
            return (
              <Form>

              </Form>
            )
            */}

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
    </div>
  );
}

export default LoginFormik;
