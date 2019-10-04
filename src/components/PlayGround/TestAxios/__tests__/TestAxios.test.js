import React from "react";
import ReactDOM from "react-dom";
import TestAxios from "../testAxios.js";
import { renderWithRedux } from "../../../../App.test.js";
import "@testing-library/jest-dom/extend-expect";
import {
  act,
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";

import axiosMock from "axiosMock";

afterEach(cleanup);

it("Async axios request works", async () => {
  axiosMock.get.mockResolvedValue({ data: { title: "some title" } });
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const { getByText, getByTestId, rerender } = render(
    <TestAxios url={url} />
  );

  expect(getByText(/...Loading/i).textContent).toBe("...Loading");

  const resolvedEl = await waitForElement(() => getByTestId("title"));

  expect(resolvedEl.textContent).not.toBe("some title");

  //expect(axiosMock.get).toHaveBeenCalledTimes(1);
  //expect(axiosMock.get).toHaveBeenCalledWith(url);
});
