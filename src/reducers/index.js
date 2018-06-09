import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/* 
  combineReducer returns a new state of store which is combined output
  of all the reducers applied to the old state of the store. Combined 
  reducer call all the other reducers.
*/
export default combineReducers({
  todos,
  visibilityFilter
})
