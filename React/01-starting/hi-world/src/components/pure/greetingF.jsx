import React, {useState} from 'react';
import PropTypes from 'prop-types';

//function way of doing it.

const GreetingF = (props) => {
  // since this is a function so there is no constructor.
  // Introduction to useState
  // [variable, method to update] = userState(initial Value)
  const [age, setAge] = useState(23);

  const birthday = () => {
    // update the age once click on button
    setAge(age+1)
  }
  return (
    <div>
      <h1>
          Hi {props.name} from functional component
      </h1>
      <h2>
        Your age is: {age}
      </h2>
      <div>
        <button onClick={birthday}>
          Birthday
        </button>
      </div>
    </div>
  );
};


GreetingF.propTypes = {
  name: PropTypes.string
};


export default GreetingF;
