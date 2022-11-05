import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {

  let initialValue = {
      text: 'Hi',
      completed: true,
      id: 0,

    }
  const [todoss, setTodos] = useState([initialValue]);
  
  useEffect(() => {
    setTodos([todos])
  }, [todos]);
  

  return (
    <div>
      <h1> Your Todo's </h1>
      <ul>
        {todoss.map((todo, index) => (
          <Todo 
          key={index}
          {...todo} // id, text, completed
          onClick = {
            () => onTodoClick(todo.id)
          }
          />
        ))}
      </ul>
    </div>
  );
}


// type of props the list has

TodoList.propTypes = {
  // to-dos is a prop that its an array
  todos: PropTypes.arrayOf(
    // structure/shape of the array
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      }
    ).isRequired
  ).isRequired,
  //onTodoClick is a prop which is a function
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
