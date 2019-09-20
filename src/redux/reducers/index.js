//REDUCERS
import * as ct from "../constants";
const initialState = {}
const rootReducer = (state = initialState, action) => {
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
  if (action.type === ct.SET_QUIZ_QUESTIONS) {
    return {
      ...state,
      quizQuestions: action.data
    };
  }
  if (action.type === ct.SET_TAG_MODE) {
    return {
      ...state,
      tagMode: action.data
    };
  }
  return state;
};

export default rootReducer;
