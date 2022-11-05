import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'

//Filter Todo List

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed)
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed)
    default:
      return todos
  }
}

// states
const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todosState, state.filterState)
  }
}

// actions
const mapDispatchToProps = (dispatch) => {
  return {
    // what is the prop related to the dispatch with the TodoList, onTodoclick
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}


// connects State and Dispatch to TodoList's Props
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;