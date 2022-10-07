import React from 'react';
import * as Yup from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';
// models
import { Task } from '../../../models/ejercicio05.tasks';
import { LEVELS } from '../../../models/ejercicio05.tasks.enum';



const Ejercicio05Formik = () => {

  // create initial values of the task

  const initialValues = {
    name: "",
    description: "",
    completed: false,
    level: ""
  }

  // create my task schema, so it follows certain rules
  const registerTaskSchema = Yup.object().shape(
    {
      name: Yup.string()
        .min(3, "Task name is too short")
        .required("Task Name is required"),
      description: Yup.string()
        .min(4, "Task description is too short")
        .required("Task Description is required"),
      level: Yup.string()
    }
  )


  return (
    <div>
      <h4> Tasks Formik </h4>
      <Formik
      initialValues={initialValues}
      validationSchema={registerTaskSchema}
      onSubmit={ async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
        }}
      >
      { ({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (

          <Form>
            <label htmlFor="name"> Task Name </label>
            <Field id="name" type="text" name="name" placeholder="Enter the name of the task"></Field>

            <label htmlFor="description"> Task Description </label>
            <Field id="description" type="text" name="description" placeholder="Enter the description of the task" ></Field>

            <label htmlFor="level">Select Priority Task Level</label>
            <select className='custom-select'  name="level" id="level">
              <option value="">Choose ...</option>
              <option type="text" value="Normal">NORMAL</option>
              <option value={LEVELS.URGENT}>URGENT</option>
              <option value={LEVELS.BLOCKING}>BLOCKING</option>
            </select>
            <button type='submit'>Create Task</button>
            {isSubmitting ? (<p> Sending your credentials ...</p>) : null}
          </Form>
        )}
      </Formik>
      
    </div>
  );
}

export default Ejercicio05Formik;
