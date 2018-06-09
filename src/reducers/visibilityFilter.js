import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  console.log("visibilityFiler reducer called ...");
  // This reducer checks if the action intends to SET VISIBILITY FILTER.
  // If it does, it sets the visibilityFilter state of that specified
  // filter in the action.
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      console.log("case: SET_VISIBILITY_FILTER");
      return action.filter;
    default:
      console.log("case: DEFAULT");
      return state;
  }
};

export default visibilityFilter;
