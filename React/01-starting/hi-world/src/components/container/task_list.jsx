// app will render task_list, task_list will render task

import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum'; // import levels because its the one that has the object LEVELS for the tasks levels.
import { Task } from '../../models/task.class'; //importing task.class because its the one that creates the tasks in the first place.
import TaskComponent from '../pure/task';

// importing the form
import TaskForm from '../pure/forms/taskForm';

//importing styles from task.scss
import '../../styles/task.scss';

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
    console.log("Task State has been modified")
    setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => {
      console.log("TaskList component is going to unmount")
    };
  }, [tasks]);
  
  function completeTask(task){
    console.log("Complete this Task: ", task)

    // define iteration number
    const index = tasks.indexOf(task)
    
    // once this function is executed
    // under task[position], change the completed status.
    tasks[index].completed = !tasks[index].completed

    // once changed, update it with setTask.
    setTasks([...tasks])
    console.log(task.completed)
  }

  function deleteTask(task){
    console.log("Delete this Task: ", task);
    // define iteration number
    const index = tasks.indexOf(task)
    // remove the task  (initialIndex,numberoftasks)
    tasks.splice(index, 1)
    // once changed, update it with setTask.
    setTasks([...tasks])
  }

  function addTask(task){
    console.log("Add this Task: ", task);
    setTasks([...tasks, task])
  }


  const Table = () => {
    return (
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
                    key={index}
                    complete={completeTask}
                    remove={deleteTask}>
                  </TaskComponent>
                  )
                }
              )
            }
          </tbody>
        </table>
      )
    }

  let tasksTable

  if (tasks.length > 0) {
    tasksTable = <Table></Table>
  }
  else {
    tasksTable = (
    <div>
      <h3> There are no tasks to show </h3>
      <h4> Please create tasks below </h4>
    </div>
  )}

  const loadingStyle = {
    color: "blue",
    fontWeight: "bolder",
    fontSize: "2.5rem"
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
          {/* TODO: add loading spinner */}
            { loading 
            ? (<p style={loadingStyle}> Loading Tasks ... </p> )
            : tasksTable}
          </div>
        </div>
      </div>
      <TaskForm add = {addTask} length = {tasks.length} ></TaskForm>
    </div>
  );
};

//tasklist has no props so there is no need of propTypes.
//exporting task list components so its used by app.js
export default TaskListComponent;