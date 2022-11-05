import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TasksDetailPage = () => {

  const navigate = useNavigate()
  const location = useLocation()




  const goToTasks = () => {
    navigate("/tasks")
  }


  return (
    <div>
      <h1> {location.state.name} </h1>
      <h3>  {location.state.description} </h3>
      <br />
      <button onClick={goToTasks}>Go to your Tasks</button>
    </div>
  );
}

export default TasksDetailPage;
