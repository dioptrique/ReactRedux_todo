import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

/* 
  TodoList is connected to store via VisibleTodoList. It will
  receive the arguments todos and toggleTodo from the 
  mapStateToProps fn and mapDispatchToProps fn passed 
  to connect() in VisibleTodoList
*/
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        /* 
          ...todo means that all thethe properties of a single todo is 
          passed to the <Todo /> component. Refer to 'todos' reducers
          to see the properties of a todo.
        */
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
