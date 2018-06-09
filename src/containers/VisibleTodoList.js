import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

/*
  VisibleTodoList is a Container Component as it is
  aware of the redux store.
*/

/* 
  A function that returns only the todos that pass the
  filter.
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

/* 
  Returns the part of the current state of the store
  that needs to be passed into TodoList (todos) as a property upon 
  connect() so that TodoList can be re-rendered with the updated 
  todos.
  It "maps" the state of the store to what is needed to 
  be passed to TodoList component serving as a conduit for data from store
  to component. 
 */
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

/* 
  This funtion takes in the dispatch function of the 
  store and returns a function that will be passed to 
  TodoList as a property upon connect(). Hence, TodoList 
  will be able to dispatch actions to the store by calling 
  the toggleTodo() property it receives as a property.

  toggleTodo is an action creator that will create the action
  of type TOGGLE_TODO which will be used by the reducer to update
  the state of the store.
*/
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

/* 
  Connects store to TodoList. Creates a new TodoList each time passing
  the objects returned by mapStateToProps and mapDispatchToProps as
  props to TodoList.
*/
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList);
