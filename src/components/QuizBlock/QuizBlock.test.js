import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import QuizBlock from "./QuizBlock";
import {renderWithRedux} from '../../App.test.js'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

test("can render with redux with defaults", () => {
  const { getByTestId, getByText, unmount, container } = renderWithRedux(
    <QuizBlock />
  );
  const elem = getByTestId('false-button')
  expect(elem).not.toBeDisabled()
  expect(elem).toBeVisible()
  expect(elem).toHaveTextContent('False')


});
