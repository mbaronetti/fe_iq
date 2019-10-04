import React from "react";
import { render, fireEvent, cleanup , waitForElement } from "@testing-library/react";
import QuizBlock from "./QuizBlock";
import {renderWithRedux} from '../../App.test.js'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

test("can render with redux with defaults", async () => {
  const { getByTestId, getByText, unmount, container } = renderWithRedux(
    <QuizBlock />
  );
  const elem = getByTestId('false-button')
  const elem2 = getByTestId('true-button')
  expect(elem).not.toBeDisabled()
  expect(elem).toBeVisible()
  expect(elem).toHaveTextContent('False')
  fireEvent.click(elem)
  expect(elem).not.toBeInTheDocument()
  expect(elem2).not.toBeInTheDocument()
  //const elem3 = await waitForElement(() => getByTestId("reload-button"));

});
