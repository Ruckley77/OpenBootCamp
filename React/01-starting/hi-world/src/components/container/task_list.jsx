// app will render task_list, task_list will render task

import React from 'react';
import { LEVELS } from '../../models/levels.enum'; // import levels because its the one that has the object LEVELS for the tasks levels.
import { Task } from '../../models/task.class' //importing task.class because its the one that creates the tasks in the first place.
import TaskComponent from '../pure/task';


// now we create our task list component that will gather all the task components.
const TaskListComponent = () => {
  // defining a default task to check if the code is working to create the the task.
  const defaultTask = new Task("Example", "Default Description", false, LEVELS.NORMAL)
  
  const changeState = (id) => {
    console.log("To do: change state of a task")
  }

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* To do: Apply a for/map to render a list*/}
      {/* calling my taskComponent, task is imported through Task Component, in proptypes.
      remember that proptypes are passed over to parents to be used*/}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

//tasklist has no props so there is no need of propTypes.

//exporting task list components so its used by app.js
export default TaskListComponent;
