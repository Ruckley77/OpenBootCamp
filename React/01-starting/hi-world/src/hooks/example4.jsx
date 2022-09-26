// Example to understand the use of props.children

import React from 'react';

const Example4 = (props) => {
  return (
    <div>
      <h1> Example of Children Props</h1>
      <h2>
        Name: {props.name}
      </h2>
      {/* props.children will show by defect anything that 
      is inside this component from the component in a superior level*/}
      {props.children}
    </div>
  );
}

export default Example4;
