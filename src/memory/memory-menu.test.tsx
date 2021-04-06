import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import MemoryMenu from "./memory-menu.component";

describe("GameMenu Component", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<MemoryMenu />);
  });

  describe("Menu Footer", () => {
    test("renders 3 buttons", () => {
      wrapper.getByText("4x4");
      wrapper.getByText("6x4");
      wrapper.getByText("8x4");
    });
    test("clicked button '4x4' renders 16cards", () => {
      const button = wrapper.getByText("4x4");
      fireEvent.click(button);
      const startButton = wrapper.getByText("START");
      fireEvent.click(startButton);
      expect(
        wrapper.container.getElementsByClassName("grid-container4").length
      ).toEqual(1);
    });
    test("clicked button '6x4' renders 24cards", () => {
      const button = wrapper.getByText("6x4");
      fireEvent.click(button);
      const startButton = wrapper.getByText("START");
      fireEvent.click(startButton);
      expect(
        wrapper.container.getElementsByClassName("grid-container6").length
      ).toEqual(1);
    });
    test("clicked button '8x4' renders 32cards", () => {
      const button = wrapper.getByText("8x4");
      fireEvent.click(button);
      const startButton = wrapper.getByText("START");
      fireEvent.click(startButton);
      expect(
        wrapper.container.getElementsByClassName("grid-container8").length
      ).toEqual(1);
    });
  });
});
