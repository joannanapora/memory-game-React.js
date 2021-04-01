import React from "react";
import {
  fireEvent,
  getByText,
  render,
  RenderResult,
} from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";

describe("App Component", () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<App />);
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
      const numberOfRenderedCards = wrapper.getAllByText("Memory Card").length;
      expect(numberOfRenderedCards).toEqual(16);
    });
    test("clicked button '6x4' renders 24cards", () => {
      const button = wrapper.getByText("6x4");
      fireEvent.click(button);
      const numberOfRenderedCards = wrapper.getAllByText("Memory Card").length;
      expect(numberOfRenderedCards).toEqual(24);
    });
    test("clicked button '8x4' renders 32cards", () => {
      const button = wrapper.getByText("8x4");
      fireEvent.click(button);
      const numberOfRenderedCards = wrapper.getAllByText("Memory Card").length;
      expect(numberOfRenderedCards).toEqual(32);
    });
  });
});
