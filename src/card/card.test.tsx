import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./card.component";
import ReactDOM from "react-dom";
import { ReactComponent as MemoryIcon } from "../assets/001-arc de triomphe.svg";

describe("Card Component", () => {
  test("renders Card component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
  });

  test("renders Card header correctly", () => {
    const { getByText } = render(<Card />);
    getByText("Memory Card");
  });

  it("renders correct className variant onClick", () => {
    const { container, getByText } = render(<Card />);
    expect(container.getElementsByClassName("card-inner").length).toBe(1);
    fireEvent.click(getByText("Memory Card"));
    expect(container.getElementsByClassName("card-inner-flipped").length).toBe(
      1
    );
    expect(container.getElementsByClassName("card-inner").length).toBe(0);
  });
});
