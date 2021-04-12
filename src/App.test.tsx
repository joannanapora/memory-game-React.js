import React, { ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

let wrapper: RenderResult;

const renderWithRouter = (component: ReactElement) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

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

  test("should render the home page", () => {
    const { container } = renderWithRouter(<App />);
    expect(container.innerHTML).toMatch("Memory Game");
  });
});
