import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Header from "./Header";
import {renderWithRedux} from '../../App.test.js'
import '@testing-library/jest-dom/extend-expect'
import './Header.css'

afterEach(cleanup);

test("can render with redux with defaults", () => {
  const { getByTestId, getByText, unmount, container } = renderWithRedux(
    <Header />
  );
  const image = getByTestId('header-logo')
  expect(image).toBeVisible()

});
