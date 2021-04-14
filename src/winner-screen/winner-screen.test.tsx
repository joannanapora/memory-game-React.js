import React from "react";
import { render, RenderResult } from "@testing-library/react";
import WinnerScreen from "./winner-screen.component";
import { BrowserRouter } from "react-router-dom";

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(
    <BrowserRouter>
      <WinnerScreen minutes={0} seconds={0} />
    </BrowserRouter>
  );
});

describe("Winner Screen Component", () => {
  test("renders Winner Screen  correctly", () => {
    wrapper.getByTestId("winner-screen");
  });
});
