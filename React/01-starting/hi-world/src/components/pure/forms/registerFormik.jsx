import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

// Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

  // creating a user
  let user = new User()


  // creating initial values always, usually empty
  const initialValues = {
    username: "",
    email: "",
    password: "",
    // a field where it will ask again for the password to confirm its the same
    confirm: "",
    role: ROLES.USER
  }


  // My validation with YUP
  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
        .min(6, "Username is too short")
        .max(12, "Username is too long")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password is too short, minimum 8 characters long")
        .required("Password is required"),
      
      //  This will confirm if the password its the same.
      //  confirm is a text/string field

      confirm: Yup.string()
        // It waits when the attribute/field password
        .when("password", {
          //  is/has a value, and the value is more than 0
          is: value => (value && value.length > 0 ? true : false),
          // Then value of "confirm" is oneOf the values the list 
          then: Yup.string().oneOf(
            // Which is the Yup schema (registerSchema)  with Yup.ref
            [Yup.ref("password")], "Password must match"
            )
          })
        .required("You must confirm the password."),
      
      role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User/ Admin")
        // .required("Role is required")

    }
  )

  // creating a submit variable so when 
  // the form is Submited, the values are the parameters and it does something with them

  return (
    <div>
    <h4> Register Formik </h4>
    <Formik
      initialValues={initialValues}

      // * Yup Validation Schema
      validationSchema = {registerSchema}

      // * onSubmit Event
      onSubmit = { async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
    > 
    {/* Anonymous function that has already predefined props */}
    {({values, touched , errors, isSubmitting, handleChange, handleBlur}) => (
      <Form>
        <label htmlFor="username">Username</label>
        <Field id="username" type="text" name="username" placeholder="Your Username" />

        {/* Username Errors */}
        {
          errors.username && touched.username && 
          (
            <ErrorMessage name="username" component="div"/>
          )
        }

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
            <ErrorMessage name='password' component="div" ></ErrorMessage>
          )
        }
        <label htmlFor="confirm">Confirm your password</label>
        <Field id="confirm" type="password" name="confirm" placeholder="Confirm your password" />

        {/* Confirm Errors */}
        {
          errors.confirm && touched.confirm && 
          (
            <ErrorMessage name='confirm' component="div" ></ErrorMessage>
          )
        }

        <button type='submit'>Register your account</button>
        {isSubmitting ? (<p> Sending your credentials ...</p>) : null}

      </Form>
    )}
    </Formik>
    </div>
  );
}

export default RegisterFormik;
