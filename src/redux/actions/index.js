//ACTIONS
import * as ct from "../constants";

export const setSearchTerm = data => {
  return {
    type: ct.SET_SEARCH_TERM,
    data
  };
};

export const setQuestions = data => {
  return {
    type: ct.SET_QUESTIONS,
    data
  };
};
export const setTagMode = data => {
  return {
    type: ct.SET_TAG_MODE,
    data
  };
};
