import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const ProfilePage = ({user}) => {

  const location = useLocation()
  const navigate = useNavigate()

  console.log(`we are in location ${location.pathname}`);


  // arrow function with navigate to previous path
  const goBack = () => {
    navigate(-1)
  }
  const goToTasks = () => {
    navigate("/tasks")
  }

  return (
    <div>
      <h1> Your Profile </h1>
      <button onClick={goBack}> Back </button>
      <button onClick={goToTasks}> Your Tasks </button>
    </div>
  );
}

export default ProfilePage;
