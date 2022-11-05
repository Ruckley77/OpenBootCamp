import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.pathname)


  // arrow function with navigate to path "/"
  const goToHome = () => {
    navigate("/")
  }

  return (
    <div>
      <h1> 404 - Page Not Found </h1>
      <button onClick={goToHome}>Go to home</button>
    </div>
  );
}

export default NotFoundPage;
