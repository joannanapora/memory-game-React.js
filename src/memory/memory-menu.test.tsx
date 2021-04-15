import React, { ReactElement } from "react";
import {
  fireEvent,
  render,
  screen,
  RenderResult,
} from "@testing-library/react";
import MemoryMenu from "./memory-menu.component";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();
const historyPushSpy = jest.spyOn(history, "push");

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(
    <Router history={history}>
      <MemoryMenu />
    </Router>
  );
});

describe("Menu Footer", () => {
  test("renders 3 buttons", () => {
    wrapper.getByText("EASY - 16");
    wrapper.getByText("MEDIUM - 24");
    wrapper.getByText("HARD - 32");
  });
  test("clicked button change its className", () => {
    expect(
      wrapper.container.getElementsByClassName("size-button-disabled").length
    ).toEqual(0);
    expect(
      wrapper.container.getElementsByClassName("size-button").length
    ).toEqual(3);
    const button = wrapper.getByText("EASY - 16");
    fireEvent.click(button);
    expect(
      wrapper.container.getElementsByClassName("size-button").length
    ).toEqual(1);
    expect(
      wrapper.container.getElementsByClassName("size-button-disabled").length
    ).toEqual(2);
  });

  test("should redirect to /cards", () => {
    const buttonEasy = wrapper.getByText("EASY - 16");
    fireEvent.click(buttonEasy);

    const buttonStart = wrapper.getByText("START");
    fireEvent.click(buttonStart);

    expect(historyPushSpy).toHaveBeenCalled();
  });
});
