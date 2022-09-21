import React, { Component } from 'react'; // component its a class
import PropTypes from 'prop-types';

// Class type!!! there is also a way with Functions

class Greeting extends Component { //creating the class and extending from components(parent class).

  constructor(props){ // props is properties that can receive
    super(props) //super allows to use the properties from the parent. Information/Data to the component
    this.state = { //data or value that is private to this component. That works for an especific task internally, it is not visible in the exterior nor modifyable, static. however we can create new states that require a new renderization.
      age: 23
    }
  }

  render() { // it will always use this method
    return ( //render always returns an HTML, only can have 1 parent element.
/* <div></div> not allowed to have 2 divs in the same level. */
    <div>
      <h1>
          Hi {this.props.name} {/* brings properties from parent because .props comes from the parent class */}
      </h1>
      <h2>
        Your age is: {this.state.age} {/* state.age is private defined within this same class, if for example age was also part of props, it would be props.age */}
      </h2>
      <div>
        <button onClick={this.birthday}>
          Birthday
        </button>
      </div>
    </div>
    );
  }

  birthday = () => { // we use arrow functions so we can be able to use "this." related to the class and not the paramenters inside the parenthesis.
    this.setState((prevState) => (
        {
          age: prevState.age + 1
        }
      )
    )
  }
}


Greeting.propTypes = { // content that wants to be transfered to a superior level
  name: PropTypes.string,
};


export default Greeting; // exporting the new child class created.
