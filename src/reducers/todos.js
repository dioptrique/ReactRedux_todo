/* 
  Reducer is a function that takes in the old state and
  performs action specified by "action" and returns a new
  state. If the action does nothing, the same state is 
  returned.
*/

const todos = (state = [], action) => {
  console.log('Todos reducer called');
  switch (action.type) {
    case 'ADD_TODO':
      console.log('case: ADD_TODO');
      // Return a new state which is just the old state
      // augmented with the new todo.
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      console.log('case: TOGGLE_TODO');
      // Find which todo the toggle action was done on.
      // Toggle the "completed" property of that todo.
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      console.log('case: DEFAULT');
      return state
  }
}

export default todos
