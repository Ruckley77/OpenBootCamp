// task is rendered by task_list

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importing styles from task.scss

import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

// create my component 
// the parameter of this component its a task.
const TaskComponent = ({task, complete, remove}) => {

  useEffect(() => {
    console.log("Task Created")
    return () => {
      console.log(`Task is going to be ${task.name} is going to unmount`);
    };
  }, [task]);

  // function that returns a badge depending on the level of the task.
  function taskLevelBadge(){
    switch (task.level) {
      case LEVELS.NORMAL:
          return(
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h6>)
      case LEVELS.URGENT:
          return(
          <h6 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h6>)
      case LEVELS.BLOCKING:
          return(
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h6>)
    
      default:
        break;
    }
  }

// Function that returns an icon depending on the completion of the task
  function taskCompletedIcon(){
    if (task.completed){
      return <i onClick={() => complete(task)} className='align-middle bi-toggle-on task-action' style={{color:'green', fontWeight:'bold'}}></i>
    }
    else {
      return <i onClick={() => complete(task)} className='align-middle bi-toggle-off task-action' style={{color:'gray', fontWeight:'bold'}}></i>
    }
  }

  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'> {task.name} </span>
      </th>
      <td>
        <span className='align-middle'> {task.description} </span>
      </td>
      <td>  
      {/* Execution of function to return badge element, dont forget the () */}
        <span className='align-middle'> {taskLevelBadge()} </span>
      </td>
      <td>
      {/* Execution of function that returns Icon to show if the task was completed or its pending*/}
      { taskCompletedIcon() }
      <i onClick={() => remove(task)} className='align-middle bi-trash task-action' style={{color:'red', fontSize: '1rem'}}></i>
      </td>
    </tr>
  );
};

// check that the new TaskComponent that was just created, its type/instanceOf is a Task.
// Task its imported from the object we created to define what a Task is defined by.
TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default TaskComponent;