import React from "react";
import { render, RenderResult } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

describe("App Component", () => {
  test("renders App correctly", () => {
    wrapper.getByTestId("App");
  });
});
