import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskForm = ({add, length}) => {

  const nameRef = useRef("")
  const descriptionRef = useRef("")
  const levelRef = useRef(LEVELS.NORMAL)

  function addTask(e){
    e.preventDefault()

    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
      )

    add(newTask)
  }

  const normalStyle = {
    color: "blue",
    fontWeight: "bold",
  }
  const urgentStyle = {
    color: "orange",
    fontWeight: "bold",
  }
  const blockingStyle = {
    color: "red",
    fontWeight: "bold",
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4 mt-4'>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg mb-4' required autoFocus placeholder='Enter Task Name'/>
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg mb-4' required placeholder='Enter Task Description' />
        <select className='form-control form-control-lg mb-4' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
          <option  style={normalStyle} value={LEVELS.NORMAL}>
            Normal
          </option>
          <option style={urgentStyle} value={LEVELS.URGENT}>
            Urgent
          </option>
          <option style={blockingStyle} value={LEVELS.BLOCKING}>
            Blocking
          </option>
        </select>
      <button type='submit' className='btn btn-success btn-lg ms-2'>
      {length > 0
      ? "Add New Task"
      : "Create Your First Task"}
      </button>
      </div>
    </form>
  );
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm;
