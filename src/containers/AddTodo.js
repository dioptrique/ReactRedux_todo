import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
/* 
  AddTodo is both a container and presentational component.
  Hence it not only connects to the store through the connect() method
  and has direct access to the action dispatcher to the reducers 
  but it also renders the jsx component. 
 */

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          {/* If input value without spaces is an empty string */}
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

// connect() does not take mapStoreToProps as AddTodo does not take
// props.
// connect() also does not take mapDispatchToProps as AddTodo takes 
// the store's dispatch as an argument directly
export default connect()(AddTodo);
