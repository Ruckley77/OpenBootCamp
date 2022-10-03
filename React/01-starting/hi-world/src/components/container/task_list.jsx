// app will render task_list, task_list will render task

import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum'; // import levels because its the one that has the object LEVELS for the tasks levels.
import { Task } from '../../models/task.class'; //importing task.class because its the one that creates the tasks in the first place.
import TaskComponent from '../pure/task';

//importing styles from task.scss
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';


// now we create our task list component that will gather all the task components.
const TaskListComponent = () => {

  
  // defining a default task to check if the code is working to create the the task.
  const defaultTask = new Task("Example", "Description 1", true, LEVELS.NORMAL)
  const defaultTask2 = new Task("Example2", "Description 2", false, LEVELS.URGENT)
  const defaultTask3 = new Task("Example3", "Description 3", false, LEVELS.BLOCKING)

  //State of the component
  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false)
    return () => {
      console.log("TaskList component is going to unmount")
    };
  }, [tasks]);


  
  const changeCompleted = (id) => {
    console.log("To do: change state of a task")
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>
              Your Tasks:
            </h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
{/* calling my taskComponent, task is imported through Task Component, in proptypes.
remember that proptypes are passed over to parents to be used*/}
              <tbody>
              {tasks.map((task, index) => {
                return (
                      <TaskComponent
                        task={task}
                        key={index}>
                      </TaskComponent>
                      )
                    }
                  )
                }
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      </div>

    </div>
  );
};

//tasklist has no props so there is no need of propTypes.

//exporting task list components so its used by app.js
export default TaskListComponent;
