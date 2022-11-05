import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPages = () => {

  const location = useLocation()
  const navigate = useNavigate()

  console.log(`we are in route: ${location.pathname}`);

  const goToHome = () => {
    navigate("/")
  }
  const goBack = () => {
    navigate(-1)
  }
  const goForward = () => {
    navigate(1)
  }

  return (
    <div>
      <h1>
        About | FAQs
      </h1>
      <div>
        <button onClick={goBack}> Back </button>
        <button onClick={goToHome}> Go to Home </button>
        <button onClick={goForward}> Forward </button>
      </div>
    </div>
  );
}

export default AboutPages;
