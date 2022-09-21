// task is rendered by task_list

import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// create my component 
// the parameter of this component its a task.
const TaskComponent = ({task}) => {
  return (
    <div>
      <h2>
        Name: {task.name}
      </h2>
      <h3>
        Description: {task.description}
      </h3>
      <h4>
        Level: {task.level}
      </h4>
      <h5>
        This task is: {task.completed ? "COMPLETED" : "PENDING"} 
      </h5>
    </div>
  );
};

// check that the new TaskComponent that was just created, its type/instanceOf is a Task.
// Task its imported from the object we created to define what a Task is defined by.
TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};


export default TaskComponent;