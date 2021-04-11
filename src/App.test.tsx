import React from "react";
import { render, RenderResult } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

describe("App Component", () => {
  test("renders App correctly", () => {
    wrapper.getByTestId("App");
  });
});
