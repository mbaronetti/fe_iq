import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import { renderHook, act } from "@testing-library/react-hooks";
import { render, fireEvent , cleanup } from "@testing-library/react";
import rootReducer, { initialState } from "../../redux/reducers";
//import store from '../../redux/store'
import SearchBox from "./SearchBox";

afterEach(cleanup);
/*
test("should increment counter", () => {
  const { result } = renderHook(() => SearchBox('sample'));

  expect(result.current.val).toBe('');
});*/

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("can render with redux with defaults", () => {
  const { getByTestId, getByText, unmount, container } = renderWithRedux(
    <SearchBox />
  );
  //fireEvent.click(getByText('+'))
  console.log(getByTestId("search-value").innerHTML);
  expect(getByTestId("search-value")).toBeDefined();
});
