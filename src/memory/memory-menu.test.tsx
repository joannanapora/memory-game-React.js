import React from "react";
import {
  fireEvent,
  render,
  screen,
  RenderResult,
} from "@testing-library/react";
import MemoryMenu from "./memory-menu.component";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

describe("GameMenu Component", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <MemoryRouter>
        <MemoryMenu history={history} />
      </MemoryRouter>
    );
  });

  describe("Menu Footer", () => {
    test("renders 3 buttons", () => {
      wrapper.getByText("EASY - 16");
      wrapper.getByText("MEDIUM - 24");
      wrapper.getByText("HARD - 32");
    });
    // test("clicked button 'EASY - 16' renders 16cards", () => {
    //   const history = createMemoryHistory();
    //   const button = wrapper.getByText("EASY - 16");
    //   fireEvent.click(button);
    //   const startButton = wrapper.getByText("START");
    //   fireEvent.click(startButton);
    //   expect(screen.getByText("/cards")).toBeInTheDocument();
    // });
    // test("clicked button 'MEDIUM - 24' renders 24cards", () => {
    //   const button = wrapper.getByText("MEDIUM - 24");
    //   fireEvent.click(button);
    //   const startButton = wrapper.getByText("START");
    //   fireEvent.click(startButton);

    // });
    // test("clicked button 'HARD - 32' renders 32cards", () => {
    //   const button = wrapper.getByText("HARD - 32");
    //   fireEvent.click(button);
    //   const startButton = wrapper.getByText("START");
    //   fireEvent.click(startButton);
    // });
  });
});
