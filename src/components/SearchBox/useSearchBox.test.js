import React from "react";
import { Provider } from "react-redux";
//import { renderHook, act } from "@testing-library/react-hooks";
import { render, fireEvent, cleanup } from "@testing-library/react";
//import store from '../../redux/store'
import SearchBox from "./SearchBox";
import {renderWithRedux} from '../../App.test.js'
afterEach(cleanup);


test("can render with redux with defaults", () => {
  const { getByTestId, getByText, unmount, container } = renderWithRedux(
    <SearchBox />
  );
  //fireEvent.click(getByText('+'))
  expect(getByTestId("search-value").textContent).toBe("");
  fireEvent.change(getByTestId("search-input"), {
    target: { value: "search query" }
  });
  expect(getByTestId("search-value").textContent).toBe("search query");

});
