//REDUCERS
import * as ct from "../constants";

const rootReducer = (state = {}, action) => {
  if (action.type === ct.SET_SEARCH_TERM) {
    return {
      ...state,
      searchTerm: action.data
    };
  }
  if (action.type === ct.SET_QUESTIONS) {
    return {
      ...state,
      questions: action.data
    };
  }
  if (action.type === ct.SET_SEARCH_RESULTS) {
    return {
      ...state,
      searchResults: action.data
    };
  }
  return state;
};

export default rootReducer;
